// Existing contracts data
let contracts = [
    { id: 1, name: "ABC Corp.", status: "Active", type: "Service Agreement", value: 50000, dateAdded: "2024-08-15", expirationDate: "2024-12-01" },
    { id: 2, name: "XYZ Ltd.", status: "Expired", type: "Sales Contract", value: 30000, dateAdded: "2024-07-10", expirationDate: "2024-08-10" },
    { id: 3, name: "DEF Inc.", status: "Active", type: "NDA", value: 20000, dateAdded: "2024-08-14", expirationDate: "2024-10-01" },
    { id: 4, name: "GHI Co.", status: "Near Expiration", type: "Service Agreement", value: 40000, dateAdded: "2024-06-20", expirationDate: "2024-08-20" },
    { id: 5, name: "JKL LLC", status: "Active", type: "Sales Contract", value: 70000, dateAdded: "2024-05-15", expirationDate: "2024-09-15" },
];

// Add new contract
document.getElementById("contractForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const contractName = document.getElementById("contractName").value;
    const contractStatus = document.getElementById("contractStatus").value;
    const contractType = document.getElementById("contractType").value;
    const contractValue = parseFloat(document.getElementById("contractValue").value);
    const dateAdded = document.getElementById("dateAdded").value;
    const expirationDate = document.getElementById("expirationDate").value;

    const newContract = {
        id: contracts.length + 1,
        name: contractName,
        status: contractStatus,
        type: contractType,
        value: contractValue,
        dateAdded: dateAdded,
        expirationDate: expirationDate
    };

    contracts.push(newContract);
    alert("Contract added successfully!");

    // Optionally, you can clear the form fields after submission
    document.getElementById("contractForm").reset();
});
