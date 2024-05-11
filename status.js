// Example bin status data (replace this with actual data fetched from your backend)
const binStatusData = [
    { town: 'Malindi', location: 'Street A', serialNumber: 'BIN001', fillLevel: 'High', content: 'Glass' },
    { town: 'Mombasa', location: 'Street B', serialNumber: 'BIN002', fillLevel: 'Medium', content: 'Papers'},
    { town: 'Majengo', location: 'Street C', serialNumber: 'BIN003', fillLevel: 'Low', content: 'Metal'},
    { town: 'Mariakani', location: 'Street D', serialNumber: 'BIN004', fillLevel: 'Empty', content: 'Gabbage'},
    { town: 'Kilifi', location: 'street E', serialNumber: 'BIN005', fillLevel: 'Full', content: 'Plastic'}
];

// Function to generate HTML for bin status table rows
function generateBinStatusRows(data) {
    return data.map(bin => `
        <tr>
            <td>${bin.town}</td>
            <td>${bin.location}</td>
            <td>${bin.serialNumber}</td>
            <td>${bin.fillLevel}</td>
            <td>${bin.content}</td>

        </tr>
    `).join('');
}

// Populate the table body with bin status data
document.querySelector('tbody').innerHTML = generateBinStatusRows(binStatusData);
