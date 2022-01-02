import Button from "react-bootstrap/Button";
import DataTable from "react-data-table-component";
import { useJsonToCsv } from "react-json-csv";
import "./RenderApplications.css";

const RenderApplications = ({
    columns,
    application,
    ExpandedComponent,
    handleSelectedRows,
    currentJob,
    fields,
}) => {
    const { saveAsCsv } = useJsonToCsv();

    let newApplication = [];

    application.length > 0 &&
        application.forEach((element) => {
            // element.student.adharNumber =
            //     element.student.adharNumber.toString();
            // console.log(typeof element.student.adharNumber);
            newApplication.push(Object.assign(element, element.student));
        });

    const filename = "Applications for " + currentJob.company,
        data = application;

    return (
        <DataTable
            title={
                <div className="row mb-4 mt-1">
                    <div className="col-6">
                        <h5>Applications</h5>
                        <span className="m-0 p-0 text-muted font-size-13px">
                            Click on the respective row for more information
                            about the application
                        </span>
                    </div>
                    <div className="text-end col-6">
                        <Button
                            variant="success"
                            onClick={() =>
                                saveAsCsv({ data, fields, filename })
                            }
                        >
                            Export CSV
                        </Button>
                    </div>
                    <hr />
                </div>
            }
            columns={columns}
            data={application}
            selectableRows
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            pagination
            expandOnRowClicked
            responsive
            highlightOnHover
            selectableRowsHighlight
            onSelectedRowsChange={handleSelectedRows}
        />
    );
};

export default RenderApplications;
