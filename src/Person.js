
function Person(props) {
    const {personName} = props
    const {loc} = props

    return (
      <div className="Person">
        <p>בסיס לקומפוננטה נוספת</p>
        <h4> נתון מהאבא:</h4>
        {personName} 
        <h1>נתון נוסף מהאבא</h1>
        {loc}
      </div>
    );
}
  
export default Person;