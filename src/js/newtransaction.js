    // Function to show modal with respective questions
    function showModal(type) {
        const modal = document.getElementById("transaction-modal");
        const modalTitle = document.getElementById("modal-title");
        const transactionForm = document.getElementById("transaction-form");

        // Clear previous form content
        transactionForm.innerHTML = "";

        // Set title and questions based on type
        if (type === "deposit") {
          modalTitle.textContent = "Deposit Details";
          transactionForm.innerHTML = `
            <label for="deposit-amount">Deposit Amount:</label>
            <input type="number" id="deposit-amount" placeholder="Enter amount" required>
            <label for="deposit-date">Deposit Date:</label>
            <input type="date" id="deposit-date" required>
            <label for="deposit-category">Deposit Category:</label>
            <input type="text" id="deposit-category" placeholder="Enter category" required>
            <button type="submit" class="submit-btn">Submit</button>
          `;
        } else if (type === "withdrawal") {
          modalTitle.textContent = "Withdrawal Details";
          transactionForm.innerHTML = `
            <label for="withdrawal-amount">Withdrawal Amount:</label>
            <input type="number" id="withdrawal-amount" placeholder="Enter amount" required>
            <label for="withdrawal-date">Withdrawal Date:</label>
            <input type="date" id="withdrawal-date" required>
            <label for="withdrawal-category">Withdrawal Category:</label>
            <input type="text" id="withdrawal-category" placeholder="Enter category" required>
            <button type="submit" class="submit-btn">Submit</button>
          `;
        }

        // Show the modal
        modal.classList.remove("hidden");
      }

      // Function to close modal
      function closeModal() {
        const modal = document.getElementById("transaction-modal");
        modal.classList.add("hidden");
      }