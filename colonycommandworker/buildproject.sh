ECHO "Building core"
cd ~/$GIT_DIR/toasthub-core/toasthub-core
mvn install

ECHO "Building security"
cd ~/$GIT_DIR/toasthub-security/toasthub-security
mvn install
	
ECHO "Building system"
cd ~/$GIT_DIR/toasthub-system/toasthub-system
mvn install
	
ECHO "Building member"
cd ~/$GIT_DIR//toasthub-member/toasthub-member
mvn install
	
ECHO "#Building admin"
cd ~/$GIT_DIR/toasthub-admin/toasthub-admin
mvn install
	
ECHO "Building trade"
cd ~/$GIT_DIR//toasthub-colony/toasthub-colony
mvn install
	
ECHO "Building application"
cd ~/$GIT_DIR/colonycommandworker/colonycommandworker
mvn package
	

ECHO "Building complete"
