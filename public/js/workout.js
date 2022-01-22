// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    
    // Add a new workout from the form
    $('.create-form').on('submit', function(event) {
        event.preventDefault();
        const workoutName = $('#workoutName').val().trim();
        const sets = $('#sets').val().trim();
        const duration = $('#duration').val().trim();
        const reps = $('#reps').val().trim();

        // check to make sure the workout input isn't blank before adding the workout to the db
        if (workoutInput) {
            const newWorkout = {
                name: workoutName,
                sets, 
                duration, 
                reps
            };
            // Send the POST request to add the new workout to the db
            $.ajax('/api/workouts', {
                type: 'POST',
                data: newWorkout
            }).then(function() {
                // Reload the page to get the updated list
                location.reload();
            });
        }
    });
    // Delete the workout when the trash button is clicked
    // $('.delete-workout').on('click', function(event) {
    //     var id = $(this).data('id');
    //     // Send the DELETE request to remove the workout from the db
    //     $.ajax('/api/workouts/' + id, {
    //         type: 'DELETE'
    //     }).then(function() {
    //         // Reload the page to get the updated list
    //         location.reload();
    //     });
    // }); 
});