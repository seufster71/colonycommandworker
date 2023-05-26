/*
* Author Edward Seufert
*/
'use strict';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import * as memberActions from './member-actions';
import StatusView from '../coreView/status/status-view';
import LoadingView from '../coreView/status/loading-view';
import NavigationView from '../coreView/navigation/navigation-view';
import ProfileContainer from '../core/profile/profile-container';
import DashboardContainer from './colony/dashboard/dashboard-container';
import LogoutContainer from '../core/logout/logout-container';
import MemberView from '../memberView/member-view';

import EventsContainer from './social/events/events-container';
import AcquaintancesContainer from './social/acquaintances/acquaintances-container';
import NotesContainer from './social/notes/notes-container';
import GroupsContainer from './social/groups/groups-container';

import PMTeamContainer from './pm/team/team-container';
import PMMemberContainer from './pm/team/member-container';
import PMRoleContainer from './pm/team/role-container';
import PMPermissionContainer from './pm/team/permission-container';
import PMProductContainer from './pm/product/product-container';
import PMProjectContainer from './pm/project/project-container';
import PMReleaseContainer from './pm/release/release-container';
import PMBacklogContainer from './pm/backlog/backlog-container';
import PMScrumContainer from './pm/scrum/scrum-container';
import PMDefectContainer from './pm/defect/defect-container';
import PMEnhancementContainer from './pm/enhancement/enhancement-container';
import PMTaskContainer from './pm/task/task-container';
import PMTestCaseContainer from './pm/testcase/testcase-container';
import PMTestScriptContainer from './pm/testscript/testscript-container';
import PMWorkflowContainer from './pm/workflow/workflow-container';
import PMWorkflowStepContainer from './pm/workflow/workflowstep-container';
import PMDeployContainer from './pm/deploy/deploy-container';
import PMDeployPipelineContainer from './pm/deploy/deploy-pipeline-container';
import PMDeploySystemContainer from './pm/deploy/deploy-system-container';

import CCDashboardContainer from './colony/dashboard/dashboard-container';
import CCOrganizationContainer from './colony/organization/organization-container';
import CCHiveContainer from './colony/hive/hive-container';
import CCHiveSensorContainer from './colony/hiveSensor/hiveSensor-container';

import fuLogger from '../core/common/fu-logger';
import {PrivateRoute} from '../core/common/router-utils-web';

export default function MemberContainer({location,navigate}) {
	const session = useSelector((state) => state.session);
	const appMenus = useSelector((state) => state.appMenus);
	const appPrefs = useSelector((state) => state.appPrefs);
	const dispatch = useDispatch();
	
  	
	useEffect(() => {
    	dispatch(memberActions.init({lang:session.selected.lang}));
  	}, []);

  	const changeTab = (code,index) => {
      navigate(index);
  	}

    fuLogger.log({level:'TRACE',loc:'MemberContainer::render',msg:"path "+ location.pathname});

    let myMenus = [];
    if (appMenus != null && appMenus[appPrefs.memberMenu] != null) {
      myMenus = appMenus[appPrefs.memberMenu];
    }
    let profileMenu = [];
    if (appMenus != null && appMenus.MEMBER_PROFILE_MENU_TOP != null) {
    	profileMenu = appMenus.MEMBER_PROFILE_MENU_TOP;
    }
    let myPermissions = {};
    if (session != null && session.selected != null && session.selected.permissions != null) {
      myPermissions = session.selected.permissions;
    }
    if (myMenus.length > 0) {
      return (
        <MemberView>
          <NavigationView appPrefs={appPrefs} permissions={myPermissions}
          menus={myMenus} changeTab={changeTab} activeTab={location.pathname} user={session.selected} profileMenu={profileMenu}/>
          <StatusView/>
          <Routes>
            <Route index element={<DashboardContainer location={location} navigate={navigate}/>} />
 			<Route element={<PrivateRoute permissions={myPermissions} code="MA" pathto="/access-denied" />} >
				<Route path="/acquaintances/*" element={<AcquaintancesContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>} >
				<Route path="/pm-team/*" element={<PMTeamContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>} >
				<Route path="/pm-member/*" element={<PMMemberContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>} >
				<Route path="/pm-role/*" element={<PMRoleContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTEAM" pathto="/access-denied"/>} >
				<Route path="/pm-permission/*" element={<PMPermissionContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMPROD" pathto="/access-denied"/>} >
				<Route path="/pm-product/*" element={<PMProductContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMPROJ" pathto="/access-denied"/>} >
				<Route path="/pm-project/*" element={<PMProjectContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMREL" pathto="/access-denied"/>} >
				<Route path="/pm-release/*" element={<PMReleaseContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMBAK" pathto="/access-denied"/>} >
				<Route path="/pm-backlog/*" element={<PMBacklogContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMSCR" pathto="/access-denied"/>} >
				<Route path="/pm-scrum/*" element={<PMScrumContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMDEF" pathto="/access-denied"/>} >
				<Route path="/pm-defect/*" element={<PMDefectContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMENH" pathto="/access-denied"/>} >
				<Route path="/pm-enhancement/*" element={<PMEnhancementContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTASK" pathto="/access-denied"/>} >
				<Route path="/pm-task/*" element={<PMTaskContainer location={location} navigate={navigate}/>} />
			</Route>
			 <Route element={<PrivateRoute permissions={myPermissions} code="MPMTC" pathto="/access-denied"/>} >
				<Route path="/pm-testcase/*" element={<PMTestCaseContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMTS" pathto="/access-denied"/>} >
				<Route path="/pm-testscript/*" element={<PMTestScriptContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMWF" pathto="/access-denied"/>} >
				<Route path="/pm-workflow/*" element={<PMWorkflowContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MPMWFS" pathto="/access-denied"/>} >
				<Route path="/pm-workflowstep/*" element={<PMWorkflowStepContainer location={location} navigate={navigate}/>} />
			</Route>
			<Route element={<PrivateRoute permissions={myPermissions} code="MPMDEF" pathto="/access-denied"/>} >
				<Route path="/pm-deploy/*" element={<PMDeployContainer location={location} navigate={navigate}/>} />
			</Route>
			<Route element={<PrivateRoute permissions={myPermissions} code="MPMDEF" pathto="/access-denied"/>} >
				<Route path="/pm-deploy/pm-deploypipeline/*" element={<PMDeployPipelineContainer location={location} navigate={navigate}/>} />
			</Route>
			<Route element={<PrivateRoute permissions={myPermissions} code="MPMDEF" pathto="/access-denied"/>} >
				<Route path="/pm-deploy/pm-deploysystem/*" element={<PMDeploySystemContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MG" pathto="/access-denied"/>} >
				<Route path="/groups/*" element={<GroupsContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MN" pathto="/access-denied"/>} >
				<Route path="/notes/*" element={<NotesContainer location={location} navigate={navigate}/>} />
			</Route>
			<Route element={<PrivateRoute permissions={myPermissions} code="MCCD" pathto="/access-denied"/>} >
				<Route path="/cc-dashboard/*" element={<CCDashboardContainer location={location} navigate={navigate}/>} />
			</Route>
 			<Route element={<PrivateRoute permissions={myPermissions} code="MCCO" pathto="/access-denied"/>} >
				<Route path="/cc-organization/*" element={<CCOrganizationContainer location={location} navigate={navigate}/>} />
			</Route>
			<Route element={<PrivateRoute permissions={myPermissions} code="MCCH" pathto="/access-denied"/>} >
				<Route path="/cc-hive/*" element={<CCHiveContainer location={location} navigate={navigate}/>} />
			</Route>
			<Route element={<PrivateRoute permissions={myPermissions} code="MCCHS" pathto="/access-denied"/>} >
				<Route path="/cc-hivesensor/*" element={<CCHiveSensorContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="MP" minRights="W" pathto="/access-denied"/>} >
				<Route path="/profile/*" element={<ProfileContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route element={<PrivateRoute permissions={myPermissions} code="ML" pathto="/access-denied"/>} >
				<Route path="/logout/*" element={<LogoutContainer location={location} navigate={navigate}/>} />
			</Route>
            <Route path="/admin" render={() => (
              <Redirect to="/admin"/>
            )}/>
          </Routes>
        </MemberView>
      );
    } else {
      	return (
        	<MemberView> <LoadingView/>
        	</MemberView>
      	);
    }
}

