import React, { useState } from "react";

const Form = () => {
    const [submit, setSubmit] = useState(false);
    const [formData, setFormData] = useState({
        "entry.610957415": "",
        "entry.681411845": "",
        "entry.1336630032": "",
        "entry.743446590": "",
        "entry.1134428493": ""
    });

    const handleInputData = (input) => (e) => {
        const { value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [input]: value
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmit(true);

        let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdL5-UDYO2-qLh_b9C6FYFYtVg2yywyYPgmrg3JNw2KtBrmzA/formResponse?entry.610957415=${formData["entry.610957415"]}&entry.681411845=${formData["entry.681411845"]}&entry.1336630032=${formData["entry.1336630032"]}&entry.743446590=${formData["entry.743446590"]}&entry.1134428493=${formData["entry.1134428493"]}`;

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).catch(error => {
            console.error('An error occurred:', error);
        });
        console.log(res)
    }
    return (
        <div className="contactFormWrapper">
            <div className="formheader"></div>
            <div className="formcontact">
                {submit ? (
                    <div className="afterForm">Thanks, will get back to you soon</div>
                ) : (
                    <form onSubmit={handleSubmit} target="_self">
                        <fieldset>
                                <label htmlFor="entry.610957415">Name:</label>
                            <input
                                required
                                type="text"
                                    name="entry.610957415"
                                    onChange={handleInputData("entry.610957415")}
                                    value={formData["entry.610957415"]}
                                autoComplete={false}
                            />
                        </fieldset>

                        <fieldset>
                                <label htmlFor="entry.681411845">Company Name:</label>
                            <input
                                required
                                    name="entry.681411845"
                                    onChange={handleInputData("entry.681411845")}
                                    value={formData["entry.681411845"]}
                                autoComplete={false}
                            />
                        </fieldset>

                        <fieldset>
                                <label htmlFor="entry.1336630032">Phone:</label>
                            <input
                                required
                                    name="entry.1336630032"
                                    onChange={handleInputData("entry.1336630032")}
                                    value={formData["entry.1336630032"]}
                                autoComplete={false}
                            ></input>
                            </fieldset>
                            
                            <fieldset>
                                <label htmlFor="entry.743446590">Email:</label>
                                <input
                                    required
                                    type="email"
                                    name="entry.743446590"
                                    onChange={handleInputData("entry.743446590")}
                                    value={formData["entry.743446590"]}
                                    autoComplete={false}
                                />
                            </fieldset>

                            <fieldset>
                                <label htmlFor="entry.1134428493">Message:</label>
                                <textarea
                                    rows="4"
                                    cols="10"
                                    required
                                    name="entry.1134428493"
                                    onChange={handleInputData("entry.1134428493")}
                                    value={formData["entry.1134428493"]}
                                    autoComplete={false}
                                ></textarea>
                            </fieldset>

                        <button type="submit">Connect</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Form;
