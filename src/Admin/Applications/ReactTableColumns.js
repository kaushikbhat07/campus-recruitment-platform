// column names for react data table component
export const ReactTableColumns = [
    {
        name: "#",
        selector: (row) => row.applicationId,
        sortable: true,
        width: "3",
        maxWidth: "3",
    },
    {
        name: "Reg Number",
        selector: (row) => row.student.regNumber,
        sortable: true,
    },
    {
        name: "Name",
        selector: (row) => row.student.firstName + " " + row.student.lastName,
        sortable: true,
    },
    {
        name: "Branch",
        selector: (row) => row.student.branch,
        sortable: true,
    },
    {
        name: "Semester",
        selector: (row) => row.student.semester,
        sortable: true,
    },
    {
        name: "End Year",
        selector: (row) => row.student.endYear,
        sortable: true,
    },
    {
        name: "Contact Number",
        selector: (row) => row.student.contactNumber,
        sortable: true,
    },
];

// column names for .csv file
export const fields = {
    applicationId: "Application ID",
    regNumber: "Register Number",
    firstName: "First Name",
    lastName: "Last Name",
    dob: "Date of Birth",
    address: "Address",
    contactNumber: "Contact Number",
    semester: "Semester",
    section: "Section",
    branch: "Branch",
    specialization: "Specialization",
    resume: "Resume Link",
    startYear: "Course start year",
    endYear: "Course end year",
    gender: "Gender",
    adharNumber: "Adhar Number",
    education: "Education",
};
