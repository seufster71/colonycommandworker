GIT_DIR="gitcolony"
BRANCH="feature/colony_1_from_develop"


ECHO admin
cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/admin
git pull origin $BRANCH

ECHO adminView
cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/adminView
git pull origin $BRANCH

ECHO core
cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/core
git pull origin $BRANCH

ECHO coreView
cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/coreView
git pull origin $BRANCH

ECHO system
cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/system
git pull origin $BRANCH

ECHO systemView
cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/systemView
git pull origin $BRANCH


ECHO member social
cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/member/social
git pull origin $BRANCH

ECHO memberView social
cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/memberView/social
git pull origin $BRANCH


ECHO member pm
cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/member/pm
git pull origin $BRANCH

ECHO memberView pm
cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/memberView/pm
git pull origin $BRANCH


ECHO main
cd ~/$GIT_DIR/colonycommandworker/colonycommandworker
git pull origin $BRANCH