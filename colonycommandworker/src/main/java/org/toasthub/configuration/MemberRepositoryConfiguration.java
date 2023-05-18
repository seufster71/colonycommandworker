package org.toasthub.configuration;

import java.util.Properties;

import jakarta.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@PropertySource(value = { "classpath:application.properties" })
public class MemberRepositoryConfiguration {
	
	@Autowired
    private Environment environment;
	
	@Bean(name = "entityManagerFactoryMember")
	public LocalContainerEntityManagerFactoryBean entityManagerFactoryMember(@Qualifier("dataSourceMember") DataSource ds) {
		LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
		em.setDataSource(ds);
		em.setPackagesToScan(new String[] { "org.toasthub.core.general.model","org.toasthub.core.preference.model"});
		em.setPersistenceUnitName("PUMember");
 
		JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
		em.setJpaVendorAdapter(vendorAdapter);
		em.setJpaProperties(hibernateProperties());
 
		return em;
	}

	@Bean(name = "dataSourceMember")
	public DataSource dataSourceMember() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
	    dataSource.setDriverClassName(environment.getRequiredProperty("jdbc.driverClassName"));
	    dataSource.setUrl(environment.getRequiredProperty("jdbc.Member.url"));
	    dataSource.setUsername(environment.getRequiredProperty("jdbc.Member.username"));
	    dataSource.setPassword(environment.getRequiredProperty("jdbc.Member.password"));
	    return dataSource;
	}

	@Bean(name = "TransactionManagerMember")
	public PlatformTransactionManager TransactionManagerMember(@Qualifier("entityManagerFactoryMember") EntityManagerFactory emf){
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(emf);
		return transactionManager;
	}
	 
	@Bean
	public PersistenceExceptionTranslationPostProcessor exceptionTranslation() {
		return new PersistenceExceptionTranslationPostProcessor();
	}
	   
	private Properties hibernateProperties() {
        Properties properties = new Properties();
        properties.put("hibernate.dialect", environment.getRequiredProperty("hibernate.dialect"));
        properties.put("hibernate.show_sql", environment.getRequiredProperty("hibernate.show_sql"));
        properties.put("hibernate.format_sql", environment.getRequiredProperty("hibernate.format_sql"));
        return properties;        
    }
	
}
