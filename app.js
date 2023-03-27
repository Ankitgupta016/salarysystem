function calculateSalary() {
  // Get employee details from the form
  var empName = document.getElementById("emp-name").value;
  var empId = document.getElementById("emp-id").value;
  var empSalary = parseFloat(document.getElementById("emp-salary").value);
  var empLeave = parseInt(document.getElementById("emp-leave").value);
  var empTds = parseInt(document.getElementById("emp-tds").value);
  var month = document.getElementById("month").value;
  var year = parseInt(document.getElementById("year").value);

  // Calculate gross salary
  var grossSalary = empSalary - (empSalary / 30) * empLeave;

  // Calculate TDS amount
  var tdsAmount = (grossSalary / 100) * empTds;

  // Calculate net salary
  var netSalary = grossSalary - tdsAmount;

  // Calculate bonus
  var empBonus = 0;
  if (grossSalary >= 30000) {
    empBonus = 5000;
  } else if (grossSalary >= 20000) {
    empBonus = 3000;
  } else if (grossSalary >= 10000) {
    empBonus = 1000;
  }

  // Display results
  document.getElementById("emp-bonus").value = empBonus;
  let result = document.getElementById("result");
  result.innerHTML = `<p>Employee Name: ${empName}</p>
                      <p>Employee ID: ${empId}</p>
                      <p>Month: ${month} ${year}</p>
                      <p>Gross Salary: ${grossSalary.toFixed(2)}</p>
                      <p>TDS: ${tdsAmount.toFixed(2)}</p>
					  <p>Bonus: ${empBonus.toFixed(2)}</p>
                      <p>Net Salary: ${ +empBonus.toFixed(2)+ +netSalary.toFixed(2)}</p>
					 `;
					//  window.print(result)
}
