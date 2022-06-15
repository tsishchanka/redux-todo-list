// // import React from 'react'
// // // reactstrap components
// // import { connect } from 'react-redux'
// // import PropTypes from 'prop-types'
// // import { useRouter } from 'next/router'

// // // core components
// // import Wrapper from '../../src/components/Wrapper'
// // import CourseOverview from '../../src/components/Cards/CourseOverview'

// // import * as coursesActions from '../../redux/lib/courses/actions'

// const CoursePage = ({
//   getCourseDetails,
//   courseOverview,
//   loading,
// }) => {
//   const router = useRouter()
//   const { id } = router.query
//   React.useEffect(() => {
//     if (id) {
//       getCourseDetails(id)
//     }
//   }, [id])
//   return (
//     <Wrapper>
//       <CourseOverview
//         data={courseOverview}
//         loading={loading || !id}
//       />
//     </Wrapper>
//   )
// }

// CoursePage.propTypes = {
//   getCourseDetails: PropTypes.func.isRequired,
//   courseOverview: PropTypes.objectOf(PropTypes.any),
//   loading: PropTypes.bool,
// }

// const mapStateToProps = (state) => ({
//   courseOverview: state.courses.courseOverview,
//   loading: state.courses.loading,
// })

// const mapDispatchToProps = (dispatch) => ({
//   getCourseDetails: (payload) =>
//     dispatch(coursesActions.getCourseDetails(payload)),
// })

// // CoursePage.theme = 'dark';

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CoursePage)

// //actions

// export const getCourses = (payload) => ({
//   type: ActionTypes.GET_COURSES,
//   payload,
// })
// export const getCoursesSuccess = (payload) => ({
//   type: ActionTypes.GET_COURSES_SUCCESS,
//   payload,
// })

// import update from 'immutability-helper'
// import * as constants from './constants'

// const initialState = {
//   courses: [],
//   newCourses: [],
//   topRatedCourses: [],
//   premiumCourses: [],
//   promotedCourses: [],
//   categories: [],
//   subCategories: [],
//   courseOverview: '',
//   loading: true,
//   editLoading: true,
//   courseEdit: null,
// }
// //reducer
// const coursesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case constants.GET_COURSES_SUCCESS:
//       return {
//         ...state,
//         courses: action.payload,
//       }
//     case constants.GET_NEW_COURSES_SUCCESS:
//       return {
//         ...state,
//         newCourses: action.payload,
//       }
//     case constants.GET_TOP_RATED_COURSES_SUCCESS:
//       return {
//         ...state,
//         topRatedCourses: action.payload,
//       }
//     default:
//       return state
//   }
// }

// //constants

// export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';

// export const GET_TOP_RATED_COURSES_SUCCESS = 'GET_TOP_RATED_COURSES_SUCCESS';

// export const GET_NEW_COURSES_SUCCESS = 'GET_NEW_COURSES_SUCCESS';

// export const GET_PREMIUM_COURSES_SUCCESS = 'GET_PREMIUM_COURSES_SUCCESS';

// export const GET_PROMOTED_COURSES_SUCCESS = 'GET_PROMOTED_COURSES_SUCCESS';

// export const GET_CATEGORIES = 'GET_CATEGORIES';
// export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORI
