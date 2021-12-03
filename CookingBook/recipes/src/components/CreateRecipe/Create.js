import IngredientsList from "../IngredientItem/IngredientsList";

function Create() {
    return (
        <>
        <form className="contact100-form validate-form">
            <div className="wrap-input100 rs1-wrap-input100 validate-input">
                <span className="label-input100">Name</span>
                <input className="input100" type="text" name="name" placeholder="Enter name" />
                <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 rs1-wrap-input100 validate-input">
                <span className="label-input100">ImageUrl</span>
                <input className="input100" type="text" name="imageUrl" placeholder="ImageUrl" />
                <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 rs1-wrap-input100 validate-input">
                <span className="label-input100">Description</span>
                <textarea name="description" className="input100" cols="30" rows="10"></textarea>
                <span className="focus-input100"></span>
            </div>

            
            <IngredientsList/>

            <div className="container-contact100-form-btn">
                <button className="contact100-form-btn">
                    <span>
                        Submit
                    </span>
                </button>
            </div>
        </form>
        </>
    );
}

export default Create;