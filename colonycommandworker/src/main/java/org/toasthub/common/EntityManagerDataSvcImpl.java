package org.toasthub.common;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import org.springframework.stereotype.Component;
import org.toasthub.core.common.EntityManagerDataSvc;

@Component("EntityManagerDataSvc")
public class EntityManagerDataSvcImpl implements EntityManagerDataSvc {

	@PersistenceContext(unitName = "PUData")
	EntityManager emData;


	@Override
	public EntityManager getInstance() {
		return emData;
	}

}
