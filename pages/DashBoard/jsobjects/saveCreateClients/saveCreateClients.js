export default {
  saveClientForm: async () => {
    try {
      // Run the createClient query to insert data
      const response = await createClient.run();

      // Clear form fields
      resetWidget("ClientRoleInput");
      resetWidget("ClientFirstNameInput");
      resetWidget("ClientLastNameInput");
      resetWidget("ClientPhone");

      // Refresh client table
      await getClients.run();

      // Close modal and show success message
      closeModal('');  // Ensure this matches your modal name
      showAlert('Client saved successfully!', 'success');
    } catch (error) {
      showAlert('Failed to save client: ' + error.message, 'error');
    }
  }
};
