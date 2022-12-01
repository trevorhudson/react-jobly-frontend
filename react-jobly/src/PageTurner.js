/** Renders page turner
 *
 * prop : Current page number, function to change the page
 * state: No state
 *
 * CompanyList,JobList => PageTurner
 */

function PageTurner({ currentPage, changePage }) {
  console.log(currentPage);
  // const [formData, setFormData] = useState(null);
  /** onSubmit -> submit page number. Calls parent function */
  // function handleSubmit(evt) {
  //   evt.preventDefault();
  //   // const { name, value } = evt.target;
  //   console.log("event", evt);
  //   // console.log("handleSubmitValue",value)

  //   changePage(1);
  // }

  return (
    <div>
      <button onClick={changePage(currentPage-1)}>
        Back
      </button>
      <p>{currentPage}</p>
      <button onClick={changePage(currentPage-1)}>
        Forward
      </button>
    </div>

  );
}


export default PageTurner;