export function formatSalary(number: number) {
    const formattedNumber = number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return formattedNumber;
}