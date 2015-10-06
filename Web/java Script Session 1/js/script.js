
		function validate() {
			var firstname = document.getElementById("firstname").value;
			var lastname = document.getElementById("lastname").value;
			var password = document.getElementById("password").value;
			var confirmpassword = document.getElementById("confirmpassword").value;
			var age = document.getElementById("age").value;
			var state = document.getElementById("state").value;
			var city = document.getElementById("city").value;
			var address = document.getElementById("address").value;
			if(firstname == "") {
				alert("First Name can't be empty")
			}
			else {
				if(lastname == "") {
					alert("Last Name can't be empty");
				}
				else {
					if(password == "") {
						alert("Passwords can't be empty");
					}
					else if(password.length < 8) {
						alert("password must ne at leasr 8 characters long");
					}
					else {
						if(confirmpassword == "") {
							alert("Re_type Password");
						}
						else {
							if(password != confirmpassword) {
								alert("Password Doesn't match");
							}
							else {
								if(age == "") {
									alert("Age can't be empty");
								}
								else {
									if(state == "") {
										alert("Select State");
									}
									else {
										if(city == "") {
											alert("Select City");
										}
										else {
											if(address == "") {
												alert("Please Specify Address");
											}
											else {
												alert("user Created Successfully");
												document.getElementById("myform").submit();
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
		function activeSubmit() {
			if(document.getElementById("acceptcondition").checked == true)
			{
				document.getElementById("submitbutton").disabled = false;
			}
			else 
			{
				document.getElementById("submitbutton").disabled = true;
			}
		}
		
		function cityShow() {

			var stateObject = document.getElementById("state");
			var cityObject = document.getElementById("city");
			switch(stateObject.value) {
				case "rajasthan":
					cityObject.innerHTML = "<option value = ''>--Select City--</option><option value = 'jaipur'>Jaipur</option><option value = 'kota'>Kota</option><option value = 'ajmer'>Ajmer</option><option value = 'alwar'>Alwar</option>";
					break;
				case "maharashtra":
					cityObject.innerHTML = "<option value = ''>--Select City--</option><option value = 'mumbai'>Mumbai</option><option value = 'nagpur'>Nagpur</option><option value = 'pune'>Pune</option><option value = 'thane'>Thane</option>";
					break;
				case "bihar":
					cityObject.innerHTML = "<option value = ''>--Select City--</option><option value = 'patna'>Patna</option><option value = 'gaya'>Gaya</option><option value = 'bhagalpur'>Bhagalpur</option><option value = 'hajipur'>Hajipur</option>";
					break;	
				case "punjab":
					cityObject.innerHTML = "<option value = ''>--Select City--</option><option value = 'amritsar'>Amritsar</option><option value = 'jalandhar'>Jalandhar</option><option value = 'ludhiyana'>Ludhiyana</option><option value = 'patiala'>Patiala</option>";
					break;
			}
		}