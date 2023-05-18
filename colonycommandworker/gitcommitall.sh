GIT_DIR="gitcolony"

checkAndCommit() {
	OUTPUT=$(git status --porcelain)
	if [ -z "$OUTPUT" ]; then
		echo "#### No changes found"
	else
		echo "#### Changes found"
		echo $OUTPUT
		echo "#### Add any new files"
		git add .
		echo "#### Committing files"
		git commit -m "${1}"
		echo "#### Pushing to repo"
		git push
		git log -1
		echo "#### Complete"
	fi
}

commitAll() {
	ECHO "#### admin"
	cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/admin
	checkAndCommit "${1}"

	ECHO "#### adminView"
	cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/adminView
	checkAndCommit "${1}"
	
	ECHO "#### core"
	cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/core
	checkAndCommit "${1}"
	
	ECHO "#### coreView"
	cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/coreView
	checkAndCommit "${1}"
	
	ECHO "#### system"
	cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/system
	checkAndCommit "${1}"
	
	ECHO "#### systemView"
	cd ~/$GIT_DIR/colonycommandworker/colonycommandworker/src/main/js/systemView
	checkAndCommit "${1}"
	
	
	ECHO "#### main"
	cd ~/$GIT_DIR/colonycommandworker/colonycommandworker
	checkAndCommit "${1}"
	
	ECHO "#### Done committing"
}

all() {
	commitAll "$*"
}


	
if [ $# -eq 0 ]; then
	echo "You must supply a comment"
else 
	str="$*"
	echo Your comment is $str
	all $str
fi	
