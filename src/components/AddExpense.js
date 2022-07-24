import React from "react";

const AddExpenseList = () =>{
    return(
        <form>
            <div className="row">
                <div className="col-sm col-lg-4">
                    <label for='name'>Name</label>
                    <input required = 'required' type='text' className="form-control" id='name'></input>
                </div>

                <div className="col-sm col-lg-4">
                    <label for='cost'>Cost</label>
                    <input required ='required' type='text' className="form-control" id='cost'></input>
                </div>

                <div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
            </div>
        </form>
    );
};

export default AddExpenseList;