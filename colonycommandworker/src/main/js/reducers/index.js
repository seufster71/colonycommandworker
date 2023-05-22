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

import stocks from "../member/trade/stocks/stocks-reducer";
import crypto from "../member/trade/crypto/crypto-reducer";
import dashboard from "../member/trade/dashboard/dashboard-reducer";
import orders from "../member/trade/orders/orders-reducer";
import database from "../member/trade/database/database-reducer";
import historicalAnalysis from "../member/trade/historical_analysis/historical-analysis-reducer";
import trade from "../member/trade/trade/trade-reducer";
import tawatchlist from "../member/trade/watchlist/watchlist-reducer";
import tawatchitem from "../member/trade/watchlist/watchitem-reducer";

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
  stocks,
  crypto,
  dashboard,
  trade,
  orders,
  database,
  historicalAnalysis,
  tawatchlist,
  tawatchitem
});

export default rootReducer;
