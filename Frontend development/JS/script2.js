// Sample Data
const contracts = [
    { id: 1, name: "ABC Corp.", status: "Active", type: "Service Agreement", value: 50000, dateAdded: "2024-08-15", expirationDate: "2024-12-01" },
    { id: 2, name: "XYZ Ltd.", status: "Expired", type: "Sales Contract", value: 30000, dateAdded: "2024-07-10", expirationDate: "2024-08-10" },
    { id: 3, name: "DEF Inc.", status: "Active", type: "NDA", value: 20000, dateAdded: "2024-08-14", expirationDate: "2024-10-01" },
    { id: 4, name: "GHI Co.", status: "Near Expiration", type: "Service Agreement", value: 40000, dateAdded: "2024-06-20", expirationDate: "2024-08-20" },
    { id: 5, name: "JKL LLC", status: "Active", type: "Sales Contract", value: 70000, dateAdded: "2024-05-15", expirationDate: "2024-09-15" },
];

// Populate Contracts Table
function populateContractsTable() {
    const tableBody = document.getElementById("contractsTableBody");
    tableBody.innerHTML = ""; // Clear the table

    contracts.forEach(contract => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${contract.name}</td>
            <td>${contract.status}</td>
            <td>${contract.type}</td>
            <td>$${contract.value.toLocaleString()}</td>
            <td>${contract.dateAdded}</td>
            <td>${contract.expirationDate}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Filter Contracts Based on Search
function filterContracts() {
    const searchValue = document.getElementById("searchContracts").value.toLowerCase();
    const filteredContracts = contracts.filter(contract => {
        return contract.name.toLowerCase().includes(searchValue) ||
               contract.status.toLowerCase().includes(searchValue) ||
               contract.type.toLowerCase().includes(searchValue) ||
               contract.dateAdded.toLowerCase().includes(searchValue) ||
               contract.expirationDate.toLowerCase().includes(searchValue);
    });

    const tableBody = document.getElementById("contractsTableBody");
    tableBody.innerHTML = ""; // Clear the table

    filteredContracts.forEach(contract => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${contract.name}</td>
            <td>${contract.status}</td>
            <td>${contract.type}</td>
            <td>$${contract.value.toLocaleString()}</td>
            <td>${contract.dateAdded}</td>
            <td>${contract.expirationDate}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Initialize the table on page load
window.onload = populateContractsTable;
