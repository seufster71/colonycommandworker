package org.toasthub.common;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import org.springframework.stereotype.Component;
import org.toasthub.core.common.EntityManagerSecuritySvc;


@Component("EntityManagerSecuritySvc")
public class EntityManagerSecuritySvcImpl implements EntityManagerSecuritySvc {

	@PersistenceContext(unitName = "PUSecurity")
	EntityManager security;

	@Override
	public EntityManager getInstance() {
		return security;
	}

}
