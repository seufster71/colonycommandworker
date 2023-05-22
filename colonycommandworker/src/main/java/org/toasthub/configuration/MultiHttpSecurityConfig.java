package org.toasthub.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.toasthub.core.general.filter.TenantInterceptor;

import org.toasthub.controller.RestAuthenticationEntryPoint;



@Configuration
public class MultiHttpSecurityConfig {
	
	@Autowired
	private RestAuthenticationEntryPoint restAuthenticationEntryPoint;
	
	@Autowired
    private AccessDeniedHandler accessDeniedHandler;

	@Bean
	public PasswordEncoder passwordEncoder() {
	    return new BCryptPasswordEncoder(4);
	}
	
	@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		
			http.cors().and().csrf().disable()
				.addFilterBefore(tenantInterceptor(), BasicAuthenticationFilter.class)
				.exceptionHandling().authenticationEntryPoint(restAuthenticationEntryPoint).accessDeniedHandler(accessDeniedHandler)
				.and().httpBasic()
				.and()
				.authorizeHttpRequests((authorize) -> authorize
						.requestMatchers("/api/public/**", "/", "/login/**", "/css/**", "/img/**", "/libs/**", "/js/**", "/public/**", "/dist/**" ).permitAll()
			            .anyRequest().authenticated()
						)
				.securityContext((securityContext) -> securityContext.requireExplicitSave(false));
			
			return http.build();
	}


	private TenantInterceptor tenantInterceptor() {
		return new TenantInterceptor();
	}
	
	//private ToasthubLoginFilter toasthubLoginFilter() {
	//	return new ToasthubLoginFilter(userManagerSvc);
	//}
	
}
