export default {
  saveProperty: async () => {
    try {
      // Run the MongoDB insert query
      const response = await createProperty.run();

      // Reset form fields
      resetWidget("PropertyNameInput");
      resetWidget("PropertyTypeInput");
      resetWidget("PincodeInput");
      resetWidget("CountryInput");
      resetWidget("StateInput");
      resetWidget("CityInput");
      resetWidget("AddressInput");
      resetWidget("SizeInput");
      resetWidget("PurchasedPriceInput");
      resetWidget("AcquisitionDateInput");
      // Close modal and show success message
      closeModal('AddPropertyDailog');
      showAlert('Property added successfully!', 'success');
    } catch (error) {
      showAlert('Failed to add property: ' + error.message, 'error');
    }
  }
};
