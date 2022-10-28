export function convertMinutesStringToHours(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;
  /*
  
  return `${hours}:${minutes}`; Returns onliy the real result
 To make it look like real time we'll write the code as follows:

 */

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
    2,
    '0'
  )}`;
}
