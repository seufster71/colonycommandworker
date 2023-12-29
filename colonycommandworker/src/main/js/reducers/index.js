import { combineReducers } from "redux";
import appPrefs from "../core/common/apppref-reducer";
import appMenus from "../core/common/appmenu-reducer";
import status from "./status-reducer";
import member from '../member/member-reducer';
import session from '../core/session/session-reducer';

import adminstatus from '../admin/status/status-reducer';
import adminusers from '../admin/users/users-reducer';
import adminlanguage from '../admin/language/language-reducer';
import adminroles from '../admin/roles/roles-reducer';
import adminpermissions from '../admin/permissions/permissions-reducer';
import adminmenus from '../admin/menu/menus-reducer';
import adminpreferences from '../admin/preferences/preferences-reducer';
import adminpreferenceSub from '../admin/preferences/preferences-sub-reducer';
import admincategory from '../admin/category/category-reducer';
import adminservice from '../admin/service/service-reducer';
import admindashboard from '../admin/dashboard/dashboard-reducer';
import adminbugs from '../admin/bugs/bugs-reducer';

import systemclientdomain from '../system/clientdomain/clientdomain-reducer';
import systemapplication from '../system/application/application-reducer';
import systemservice from '../system/service/service-reducer';

import pmteam from '../member/pm/team/team-reducer';
import pmmember from '../member/pm/team/member-reducer';
import pmrole from '../member/pm/team/role-reducer';
import pmpermission from '../member/pm/team/permission-reducer';
import pmproduct from '../member/pm/product/product-reducer';
import pmproject from '../member/pm/project/project-reducer';
import pmrelease from '../member/pm/release/release-reducer';
import pmbacklog from '../member/pm/backlog/backlog-reducer';
import pmdefect from '../member/pm/defect/defect-reducer';
import pmenhancement from '../member/pm/enhancement/enhancement-reducer';
import pmscrum from '../member/pm/scrum/scrum-reducer';
import pmsprint from '../member/pm/sprint/sprint-reducer';
import pmtask from '../member/pm/task/task-reducer';
import pmtestcase from '../member/pm/testcase/testcase-reducer';
import pmtestscript from '../member/pm/testscript/testscript-reducer';
import pmworkflow from '../member/pm/workflow/workflow-reducer';
import pmworkflowstep from '../member/pm/workflow/workflowstep-reducer';
import pmdeploy from '../member/pm/deploy/deploy-reducer';
import pmdeploypipeline from '../member/pm/deploy/deploy-pipeline-reducer';
import pmdeploysystem from '../member/pm/deploy/deploy-system-reducer';

import ccorganization from '../member/colony/organization/organization-reducer';
import cchive from '../member/colony/hive/hive-reducer';
import cchivesensor from '../member/colony/hiveSensor/hiveSensor-reducer';

import ecmarket from '../member/ecommerce/market/market-reducer';
import ecstore from '../member/ecommerce/store/store-reducer';
import eccart from '../member/ecommerce/cart/cart-reducer';

import ecadminmarket from '../adminec/market/market-reducer';
import ecadminstore from '../adminec/store/store-reducer'; 

const rootReducer = combineReducers({
	appPrefs,
	appMenus,
	status,
	member,
	session,
	adminstatus,
	adminusers,
	adminlanguage,
	adminroles,
	adminpermissions,
	adminmenus,
	adminpreferences,
	adminpreferenceSub,
	admincategory,
	adminservice,
	admindashboard,
	adminbugs,
	systemclientdomain,
	systemapplication,
	systemservice,
	pmteam,pmmember,pmrole,pmpermission,pmproduct,pmproject,pmrelease,pmbacklog,pmdefect,pmenhancement,pmscrum,pmsprint,pmtask,
	pmtestcase,pmtestscript,pmworkflow,pmworkflowstep,pmdeploy,pmdeploypipeline,pmdeploysystem,
	ccorganization, cchive, cchivesensor, ecmarket, ecstore, eccart, ecadminmarket, ecadminstore
});

export default rootReducer;
