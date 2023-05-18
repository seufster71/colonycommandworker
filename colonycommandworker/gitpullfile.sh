GIT_DIR="gitcolony"
BRANCH="feature/colony_1_on_develop"


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

ECHO member trade
cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/member/trade
git pull origin $BRANCH

ECHO memberView trade
cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/memberView/trade
git pull origin $BRANCH


ECHO main
cd ~/$GIT_DIR/colonycommandworker/colonycommandworker
git pull origin $BRANCH