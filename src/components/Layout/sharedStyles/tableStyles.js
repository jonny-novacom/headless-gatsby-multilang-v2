import styled from 'styled-components';

// Tables

const ApprovalsPerformance = styled.table`
  margin-bottom: 1rem;
  width: 100%;
  caption-side: top;
  border: none;
  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
              text-bottom | middle | top | bottom | 
              <percentage> | <length> */

  tbody {
    vertical-align: top;
  }
  td,
  th {
    border: none;
  }
  /* td,
th {
  border: 1px solid;
} */

  td {
    padding: 4px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #fff;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #fff;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }

  thead tr th:first-child,
  tbody tr td:first-child {
    width: 50%;
  }

  thead tr th:first-child::before,
  tbody tr td:first-child::before {
    content: '•';
    padding-left: 0.5rem;
    padding-right: 1rem;
  }

  tbody tr:hover {
    background-color: transparent;
  }
`;

const TypicalTestData = styled.table`
  width: 100%;
  caption-side: top;
  border: none;
  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
              text-bottom | middle | top | bottom | 
              <percentage> | <length> */

  tbody {
    vertical-align: top;
  }
  td,
  th {
    border: none;
  }

  td {
    padding: 8px 16px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #f6f6f6;
    }
  }
  thead > tr {
    background-color: #fff;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }

  thead tr th:first-child,
  tbody tr td:first-child {
    width: 50%;
  }

  tbody tr:first-child {
    background-color: #d0d3d4;
  }

  tbody tr:nth-child(2) {
    background-color: #898d8d;
  }

  tbody tr:first-child td {
    padding: 20px 16px;
    font-weight: 700;
  }

  tbody tr:nth-child(2) td {
    color: white;
    font-weight: 400;
    padding: 14px 16px;
  }

  tbody tr td {
    border-right: 1px solid #7f7e7e;
  }

  tbody tr td:last-child {
    border-right: none;
  }
`;

export { ApprovalsPerformance, TypicalTestData };
