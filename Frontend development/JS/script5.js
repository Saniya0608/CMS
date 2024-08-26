// Existing contracts data (can be dynamic in a real-world app)
let contracts = [
    { id: 1, name: "ABC Corp.", status: "Active", type: "Service Agreement", value: 50000, dateAdded: "2024-08-15", expirationDate: "2024-12-01" },
    { id: 2, name: "XYZ Ltd.", status: "Expired", type: "Sales Contract", value: 30000, dateAdded: "2024-07-10", expirationDate: "2024-08-10" },
    { id: 3, name: "DEF Inc.", status: "Active", type: "NDA", value: 20000, dateAdded: "2024-08-14", expirationDate: "2024-10-01" },
    { id: 4, name: "GHI Co.", status: "Near Expiration", type: "Service Agreement", value: 40000, dateAdded: "2024-06-20", expirationDate: "2024-08-20" },
    { id: 5, name: "JKL LLC", status: "Active", type: "Sales Contract", value: 70000, dateAdded: "2024-05-15", expirationDate: "2024-09-15" },
];

// Function to generate reports
function generateReports() {
    let totalContracts = contracts.length;
    let activeContracts = contracts.filter(contract => contract.status === "Active").length;
    let expiredContracts = contracts.filter(contract => contract.status === "Expired").length;
    let nearExpirationContracts = contracts.filter(contract => contract.status === "Near Expiration").length;
    let totalContractValue = contracts.reduce((sum, contract) => sum + contract.value, 0);

    // Update the DOM with report values
    document.getElementById("totalContracts").textContent = totalContracts;
    document.getElementById("activeContracts").textContent = activeContracts;
    document.getElementById("expiredContracts").textContent = expiredContracts;
    document.getElementById("nearExpirationContracts").textContent = nearExpirationContracts;
    document.getElementById("totalContractValue").textContent = `$${totalContractValue.toLocaleString()}`;
}

// Call the function to generate reports
generateReports();
