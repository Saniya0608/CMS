// Sample Data
const contracts = [
    { id: 1, name: "ABC Corp.", status: "Active", type: "Service Agreement", value: 50000, dateAdded: "2024-08-15", expirationDate: "2024-12-01" },
    { id: 2, name: "XYZ Ltd.", status: "Expired", type: "Sales Contract", value: 30000, dateAdded: "2024-07-10", expirationDate: "2024-08-10" },
    { id: 3, name: "DEF Inc.", status: "Active", type: "NDA", value: 20000, dateAdded: "2024-08-14", expirationDate: "2024-10-01" },
    { id: 4, name: "GHI Co.", status: "Near Expiration", type: "Service Agreement", value: 40000, dateAdded: "2024-06-20", expirationDate: "2024-08-20" },
    { id: 5, name: "JKL LLC", status: "Active", type: "Sales Contract", value: 70000, dateAdded: "2024-05-15", expirationDate: "2024-09-15" },
];

// Populate Dashboard
function populateDashboard() {
    // Contract Summary
    document.getElementById("totalContracts").innerText = contracts.length;
    document.getElementById("activeContracts").innerText = contracts.filter(c => c.status === "Active").length;
    document.getElementById("expiredContracts").innerText = contracts.filter(c => c.status === "Expired").length;
    document.getElementById("nearExpirationContracts").innerText = contracts.filter(c => c.status === "Near Expiration").length;

    // Recent Activity
    const recentActivityList = document.getElementById("recentActivityList");
    contracts.slice(-3).forEach(contract => {
        const li = document.createElement("li");
        li.innerText = `Added contract: ${contract.name} - ${contract.dateAdded}`;
        recentActivityList.appendChild(li);
    });

    // Upcoming Deadlines
    const upcomingDeadlinesList = document.getElementById("upcomingDeadlinesList");
    contracts.filter(c => c.status === "Near Expiration
