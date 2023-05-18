ECHO getting submodules

GIT_DIR="gitcolony"
BRANCH="feature/colony_1_on_develop"

cd ~/$GIT_DIR/colonycommandworker/colonycommandworker
git submodule init
git submodule update
git submodule foreach git checkout $BRANCH
git submodule foreach git pull origin $BRANCH