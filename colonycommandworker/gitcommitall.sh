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
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker/src/main/js/admin
	checkAndCommit "${1}"

	ECHO "#### adminView"
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker/src/main/js/adminView
	checkAndCommit "${1}"
	
	ECHO "#### admin"
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker/src/main/js/adminec
	checkAndCommit "${1}"

	ECHO "#### adminView"
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker/src/main/js/adminViewec
	checkAndCommit "${1}"
	
	ECHO "#### core"
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker/src/main/js/core
	checkAndCommit "${1}"
	
	ECHO "#### coreView"
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker/src/main/js/coreView
	checkAndCommit "${1}"
	
	ECHO "#### system"
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker/src/main/js/system
	checkAndCommit "${1}"
	
	ECHO "#### systemView"
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker/src/main/js/systemView
	checkAndCommit "${1}"
	
	ECHO "#### member logout"
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker/src/main/js/member/logout
	checkAndCommit "${1}"
	ECHO "#### member logout view"
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker/src/main/js/memberView/logout
	checkAndCommit "${1}"
	
	ECHO "#### member profile"
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker/src/main/js/member/profile
	checkAndCommit "${1}"
	ECHO "#### member profile view"
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker/src/main/js/memberView/profile
	checkAndCommit "${1}"
	
	ECHO "#### member session"
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker/src/main/js/member/session
	checkAndCommit "${1}"
	
	ECHO "#### member colony"
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker/src/main/js/member/colony
	checkAndCommit "${1}"
	
	ECHO "#### member colony view"
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker/src/main/js/memberView/colony
	checkAndCommit "${1}"
	
	
	ECHO "#### main"
	cd ~/$GIT_DIR/colonycommanderworker/colonycommandworker
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
