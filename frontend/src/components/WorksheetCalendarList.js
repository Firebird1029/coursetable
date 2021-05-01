import React, { useMemo } from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { SurfaceComponent } from './StyledComponents';
import WorksheetCalendarListItem from './WorksheetCalendarListItem';
import NoCourses from './NoCourses';
import { useWorksheet } from '../worksheetContext';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import {
  ratingColormap,
  workloadColormap,
  totalWorkloadColormap,
} from '../queries/Constants';

// Space above row dropdown to hide scrolled courses
const StyledSpacer = styled.div`
  background-color: ${({ theme }) => theme.background};
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 56px;
  z-index: 2;
`;

// Hide icon
const StyledBsEyeSlash = styled(BsEyeSlash)`
  transition: transform 0.3s !important;
`;

// Show icon
const StyledBsEye = styled(BsEye)`
  transition: transform 0.3s !important;
`;

// Show/hide all button
const StyledBtn = styled.div`
  background-color: ${({ theme }) => theme.select};
  color: ${({ theme }) => theme.text[0]};
  padding: 5px;
  cursor: pointer;
  text-align: center;
  border: solid 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  &:hover {
    border: 2px solid hsl(0, 0%, 70%);
    ${StyledBsEyeSlash} {
      transform: scale(1.15);
    }
    ${StyledBsEye} {
      transform: scale(1.15);
    }
  }

  &:focus {
    background-color: ${({ theme }) => theme.select};
  }

  &.form-control:focus {
    color: ${({ theme }) => theme.text[0]};
  }
`;

// Container of row dropdown (without spacer)
const StyledContainer = styled(SurfaceComponent)`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0 2px 6px 0px rgba(0, 0, 0, 0.2);
`;

// Course list
const CourseList = styled(SurfaceComponent)`
  overflow-x: hidden;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 2px 6px 0px rgba(0, 0, 0, 0.2);
`;

/**
 * Render worksheet list in default worksheet view
 */

function WorksheetCalendarList() {
  const {
    courses,
    cur_season,
    hidden_courses,
    totalRatings,
    avgRatings,
    toggleCourse,
  } = useWorksheet();

  // Build the HTML for the list of courses of a given season
  const items = useMemo(() => {
    // List to hold HTML
    const items = [];

    // Iterate over all listings of this season
    courses.forEach((course, id) => {
      // Add listgroup item to items list
      items.push(
        <WorksheetCalendarListItem
          key={id}
          course={course}
          hidden={hidden_courses[course.crn]}
        />
      );
    });

    return items;
  }, [courses, hidden_courses]);

  const areHidden = useMemo(() => {
    return Object.keys(hidden_courses).length === courses.length;
  }, [hidden_courses, courses]);

  return (
    <>
      {/* Top card */}
      <StyledSpacer className="pt-3">
        <StyledContainer layer={1} className="mx-1">
          <div className="shadow-sm p-2">
            {/* Ratings Summary */}
            <Row className="mx-auto pb-2">
              <Col className="px-0 w-100 d-flex flex-column align-items-stretch">
                <h5 className="text-center">Ratings Summary</h5>
                <div className="d-flex justify-content-around flex-wrap">
                  <div className="d-flex flex-column align-items-center">
                    Avg Overall:
                    <span
                      style={{
                        color: avgRatings.overall
                          ? ratingColormap(avgRatings.overall)
                              .darken()
                              .saturate()
                          : '#cccccc',
                      }}
                    >
                      {avgRatings.overall
                        ? avgRatings.overall.toFixed(2)
                        : 'N/A'}
                    </span>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    Avg Workload:
                    <span
                      style={{
                        color: avgRatings.workload
                          ? workloadColormap(avgRatings.workload)
                              .darken()
                              .saturate()
                          : '#cccccc',
                      }}
                    >
                      {avgRatings.workload
                        ? avgRatings.workload.toFixed(2)
                        : 'N/A'}
                    </span>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    Avg Professor:
                    <span
                      style={{
                        color: avgRatings.professor
                          ? ratingColormap(avgRatings.professor)
                              .darken()
                              .saturate()
                          : '#cccccc',
                      }}
                    >
                      {avgRatings.professor
                        ? avgRatings.professor.toFixed(2)
                        : 'N/A'}
                    </span>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    Total Workload:
                    <span
                      style={{
                        color: totalRatings.workload
                          ? totalWorkloadColormap(totalRatings.workload)
                              .darken()
                              .saturate()
                          : '#cccccc',
                      }}
                    >
                      {totalRatings.workload
                        ? totalRatings.workload.toFixed(2)
                        : 'N/A'}
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            {/* Hide/Show All Button */}
            <Row className="mx-auto">
              <Col className="px-0 w-100">
                <StyledBtn onClick={() => toggleCourse(areHidden ? -2 : -1)}>
                  {areHidden ? (
                    <>
                      <StyledBsEyeSlash className="my-auto pr-2" size={26} />{' '}
                      Show
                    </>
                  ) : (
                    <>
                      <StyledBsEye className="my-auto pr-2" size={26} /> Hide
                    </>
                  )}{' '}
                  All
                </StyledBtn>
              </Col>
            </Row>
          </div>
        </StyledContainer>
      </StyledSpacer>
      {/* List of courses for this season */}
      <CourseList layer={0} className="mx-1">
        {items.length > 0 ? (
          // There are courses for this season
          <ListGroup variant="flush">{items}</ListGroup>
        ) : (
          // There aren't courses for this season
          <NoCourses cur_season={cur_season} />
        )}
      </CourseList>
    </>
  );
}

// WorksheetCalendarList.whyDidYouRender = true;
export default React.memo(WorksheetCalendarList);
