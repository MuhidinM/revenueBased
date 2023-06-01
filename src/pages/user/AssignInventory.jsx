import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Selectinput from "../../components/Selectinput";

function AssignInventory({
  onSubmit,
  values,
  onCancel,
  salesDetail,
  inventoryDetail,
}) {
  const ValidationSchema = Yup.object().shape({
    item_id: Yup.string().required("Item is required"),
    sales_id: Yup.string().required("Sales is required"),
  });

  const item_option = inventoryDetail.map((item) => ({
    value: item.item_id,
    label: item.item_name,
  }));

  const sales_option = salesDetail.map((item) => ({
    value: item.sales_id,
    label: item.email_address ? item.email_address : item.phone_number,
  }));

  return (
    <>
      <Formik
        initialValues={values}
        validationSchema={ValidationSchema}
        isInitialValid={ValidationSchema.isValidSync(values)}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="w-full">
                <Selectinput
                  arr={item_option}
                  id="item_id"
                  name="item_id"
                  value={formik.values.item_id}
                  handleChange={formik.handleChange}
                  title="Select Item"
                />
              </div>
              <div className="w-full">
                <Selectinput
                  arr={sales_option}
                  id="sales_id"
                  name="sales_id"
                  value={formik.values.sales_id}
                  handleChange={formik.handleChange}
                  title="Select Sales"
                />
              </div>
            </div>

            <button onClick={onCancel} className="swal2-cancel swal2-styled">
              Cancel
            </button>
            <button
              type="submit"
              // onClick={onSubmit}
              style={{ backgroundColor: "#01AFEF" }}
              className="swal2-confirm swal2-styled"
            >
              Assign
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default AssignInventory;
