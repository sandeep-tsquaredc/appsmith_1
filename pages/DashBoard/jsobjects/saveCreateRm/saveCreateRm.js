export default {
  saveForm: async () => {
    try {
      // Run the createRM query to insert data
      const response = await createRM.run();

      // Clear input fields
      storeValue("RMsFirstname", "");
      storeValue("RMsLastname", "");
      storeValue("RMsPhone", "");

      // Refresh table data
      await getRM.run();
 
      // Close modal and show success message
      closeModal('AddClientDailog');
      showAlert('User saved successfully!', 'success');
    } catch (error) {
      showAlert('Failed to save user: ' + error.message, 'error');
    }
  }
};
