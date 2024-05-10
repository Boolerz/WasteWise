// Example bin status data (replace this with actual data fetched from your backend)
const binStatusData = [
    { location: 'Street A', serialNumber: 'BIN001', fillLevel: 'High', content: 'Glass' },
    { location: 'Street B', serialNumber: 'BIN002', fillLevel: 'Medium', content: 'Papers'},
    { location: 'Street C', serialNumber: 'BIN003', fillLevel: 'Low', content: 'Metal'},
    { location: 'Street D', serialNumber: 'BIN004', fillLevel: 'Empty', content: 'Gabbage'},
    { location: 'street E', serialNumber: 'BIN005', fillLevel: 'Full', content: 'Plastic'}
];

// Function to generate HTML for bin status table rows
function generateBinStatusRows(data) {
    return data.map(bin => `
        <tr>
            <td>${bin.location}</td>
            <td>${bin.serialNumber}</td>
            <td>${bin.fillLevel}</td>
            <td>${bin.content}</td>

        </tr>
    `).join('');
}

// Populate the table body with bin status data
document.querySelector('tbody').innerHTML = generateBinStatusRows(binStatusData);
