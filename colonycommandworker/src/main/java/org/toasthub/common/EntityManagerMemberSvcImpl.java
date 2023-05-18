package org.toasthub.common;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import org.springframework.stereotype.Component;
import org.toasthub.core.common.EntityManagerMemberSvc;

@Component("EntityManagerMemberSvc")
public class EntityManagerMemberSvcImpl implements EntityManagerMemberSvc {

	@PersistenceContext(unitName = "PUMember")
	EntityManager member;


	@Override
	public EntityManager getInstance() {
		return member;
	}

}
