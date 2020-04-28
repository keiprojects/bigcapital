
import { connect } from 'react-redux';
import t from 'store/types';

const mapStateToProps = (state) => ({
  
});

const mapActionsToProps = (dispatch) => ({
  changePageTitle: (pageTitle) => dispatch({
    type: t.CHANGE_DASHBOARD_PAGE_TITLE, pageTitle
  }),

  changePageSubtitle: (pageSubtitle) => dispatch({
    type: t.ALTER_DASHBOARD_PAGE_SUBTITLE, pageSubtitle,
  }),

  setTopbarEditView: (id) => dispatch({
    type: t.SET_TOPBAR_EDIT_VIEW, id,
  }),

  setDashboardRequestLoading: () => dispatch({
    type: t.SET_DASHBOARD_REQUEST_LOADING,
  }),

  setDashboardRequestCompleted: () => dispatch({
    type: t.SET_DASHBOARD_REQUEST_COMPLETED,
  }),
});

export default connect(mapStateToProps, mapActionsToProps);