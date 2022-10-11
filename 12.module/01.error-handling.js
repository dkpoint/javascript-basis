/*
    @ Error handling
        # Reference
            + Error : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
            + try...catch : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
*/

function getMonthName(monthNumber) {
  monthNumber--; // Adjust monthNumber for array index (1 = Jan, 12 = Dec)

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  if (months[monthNumber]) {
    return months[monthNumber];
  } else {
    throw new Error('Invalid monthNumber');
  }
}

function printMonthName(monthNumber) {
  let monthName;

  try {
    monthName = getMonthName(monthNumber);
  } catch (e) {
    monthName = 'unknown';
    console.log(e.name);
    console.log(e.message);
  }

  console.log(monthName);
}

printMonthName(0);
// Error
// Invalid monthNumber
// unknown
