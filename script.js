function generateWorkoutPlan() {
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;

    const caloriesResultElement = document.getElementById('calories-result');
    const workoutPlanElement = document.getElementById('workout-plan');
    const quoteElement = document.getElementById('quote'); 

    if (weight && age && gender) {
        
        quoteElement.style.display = 'none';

        
        caloriesResultElement.innerHTML = '';
        workoutPlanElement.innerHTML = '';

        
        const bmrMale = 66 + (6.23 * weight) + (12.7 * 65) - (6.8 * age); 
        const bmrFemale = 655 + (4.35 * weight) + (4.7 * 65) - (4.7 * age);
        const caloriesBurned = gender === 'male' ? bmrMale : bmrFemale;

        caloriesResultElement.innerHTML = `<p><strong>Calories Burned (Daily):</strong> ${caloriesBurned.toFixed(2)} kcal</p>`;

        if (weight <= 100) {
            workoutPlanElement.innerHTML = `
                <h3>YOUR WORKOUT PLAN</h3>
                <h4>Week 1-4: Building the Foundation</h4>
                <p><b>Goals:</b> Build consistency, improve cardiovascular health, and strengthen muscles and joints.</p>
                <ul>
                    <li><b>Day 1:</b> Cardio - Brisk walking or light cycling for 20-30 minutes, adding short intervals of faster walking.</li>
                    <li><b>Day 2:</b> Strength Training - Bodyweight squats (2x10-12), modified push-ups (2x8-10), dumbbell press (2x10), and dead bugs (2x8-10 per side).</li>
                    <li><b>Day 3:</b> Rest or Active Recovery - Light yoga or stretching.</li>
                    <li><b>Day 4:</b> Cardio + Core - 25 minutes of steady walking, planks (2x20-30 sec), bicycle crunches (2x10-12), and glute bridges (2x12).</li>
                    <li><b>Day 5:</b> Strength Training - Repeat Day 2 with slight variations.</li>
                    <li><b>Day 6:</b> Cardio - 30-40 minutes of walking, swimming, or cycling.</li>
                    <li><b>Day 7:</b> Rest or Active Recovery - Gentle yoga or stretching for 15 minutes.</li>
                </ul>
                <h4>Week 5-8: Progression</h4>
                <p><b>Goals:</b> Increase intensity and variety in workouts.</p>
                <ul>
                    <li><b>Day 1:</b> Cardio Intervals - Warm-up, then alternate 1 minute faster pace and 2 minutes slower pace for 6-8 rounds.</li>
                    <li><b>Day 2:</b> Upper Body Strength Training - Push-ups (3x10-12), dumbbell rows (3x12), shoulder press (3x10), and side planks (10-15 sec per side).</li>
                    <li><b>Day 3:</b> Rest or Active Recovery.</li>
                    <li><b>Day 4:</b> Cardio Endurance - 40 minutes steady pace walking or cycling.</li>
                    <li><b>Day 5:</b> Lower Body Strength - Squats (3x12), glute bridges (3x15), step-ups (2x10 per leg), and core stability exercises.</li>
                    <li><b>Day 6:</b> Cardio - 30-45 minutes of swimming, hiking, or cycling.</li>
                    <li><b>Day 7:</b> Rest or Yoga - Relax and recover.</li>
                </ul>
                <h4>Week 9 and Beyond: Building Momentum</h4>
                <p><b>Goals:</b> Challenge your body with higher intensity and volume while maintaining long-term habits.</p>
                <ul>
                    <li>Strength Training: Progress to 3 full-body or split routines per week with heavier weights or more reps.</li>
                    <li>Cardio: Mix in longer endurance sessions (45-60 minutes) and increase interval training intensity.</li>
                    <li>Flexibility/Mobility: Dedicate 1-2 days per week to yoga or stretching.</li>
                </ul>
            `;

        } else if (weight >= 101 && weight <= 150) {
                workoutPlanElement.innerHTML = `
                    <h3>YOUR WORKOUT PLAN</h3>
                    <h4>Week 1-4: Building the Foundation</h4>
                    <p><b>Goals:</b> Build endurance, increase strength, and improve overall fitness.</p>
                    <ul>
                        <li><b>Day 1:</b> Cardio Intervals:
                            <ul>
                                <li>Warm-up: 5 minutes of brisk walking</li>
                                <li>Interval: 1-minute high-intensity effort, followed by 2 minutes of recovery (repeat 6-8 times).</li>
                            </ul>
                        </li>
                        <li><b>Day 2:</b> Strength Training - Full-body circuit:
                            <ul>
                                <li>Push-ups: 3 sets of 10-12 reps</li>
                                <li>Dumbbell squats: 3 sets of 10-15 reps</li>
                                <li>Plank: 3 sets of 30 seconds</li>
                                <li>Dumbbell rows: 3 sets of 10-12 reps per side</li>
                            </ul>
                        </li>
                        <li><b>Day 3:</b> Rest or Active Recovery:
                            <ul>
                                <li>Gentle stretching or yoga for 15-20 minutes.</li>
                            </ul>
                        </li>
                        <li><b>Day 4:</b> Cardio Endurance:
                            <ul>
                                <li>40-50 minutes of steady-state cardio (e.g., jogging, cycling).</li>
                            </ul>
                        </li>
                        <li><b>Day 5:</b> Strength Training - Upper-body focus:
                            <ul>
                                <li>Dumbbell bench press: 3 sets of 10-12 reps</li>
                                <li>Shoulder presses: 3 sets of 10-12 reps</li>
                                <li>Bicep curls: 3 sets of 10-15 reps</li>
                                <li>Core exercises: plank variations and crunches</li>
                            </ul>
                        </li>
                        <li><b>Day 6:</b> Cardio:
                            <ul>
                                <li>Choose your favorite activity (e.g., swimming, hiking) for 30-45 minutes.</li>
                            </ul>
                        </li>
                        <li><b>Day 7:</b> Rest or Yoga:
                            <ul>
                                <li>Take the day to relax and recover with light mobility work or yoga.</li>
                            </ul>
                        </li>
                    </ul>
                    <h4>Week 5-8: Progression</h4>
                    <p><b>Goals:</b> Continue building on endurance and strength with added intensity and volume.</p>
                    <ul>
                        <li><b>Day 1:</b> Cardio Intervals:
                            <ul>
                                <li>Warm-up: 5-10 minutes light jogging or brisk walking.</li>
                                <li>Intervals: Alternate 2 minutes fast pace with 3 minutes moderate pace for 30 minutes.</li>
                            </ul>
                        </li>
                        <li><b>Day 2:</b> Strength Training - Full-body circuit with heavier weights:
                            <ul>
                                <li>Deadlifts: 3 sets of 8-10 reps</li>
                                <li>Dumbbell rows: 3 sets of 10-12 reps</li>
                                <li>Overhead press: 3 sets of 8-10 reps</li>
                                <li>Core work: Russian twists (2 sets of 15 reps per side)</li>
                            </ul>
                        </li>
                        <li><b>Day 3:</b> Active Recovery or Rest:
                            <ul>
                                <li>Include foam rolling, light stretching, or an easy 20-minute walk.</li>
                            </ul>
                        </li>
                        <li><b>Day 4:</b> Cardio Endurance:
                            <ul>
                                <li>50-60 minutes of steady-state cardio with moderate intensity.</li>
                            </ul>
                        </li>
                        <li><b>Day 5:</b> Strength Training - Upper-body and core:
                            <ul>
                                <li>Push-ups: 3 sets of 10-15 reps</li>
                                <li>Dumbbell bench press: 3 sets of 10-12 reps</li>
                                <li>Shoulder presses: 3 sets of 10-12 reps</li>
                                <li>Plank: 3 sets of 45 seconds</li>
                            </ul>
                        </li>
                        <li><b>Day 6:</b> Cardio:
                            <ul>
                                <li>Choose a fun activity: cycling, swimming, or hiking for 45 minutes.</li>
                            </ul>
                        </li>
                        <li><b>Day 7:</b> Yoga or Rest:
                            <ul>
                                <li>Dedicate this day to mobility, relaxation, and stretching.</li>
                            </ul>
                        </li>
                    </ul>
                `;
        } else if (weight >= 151 && weight <= 200) {
                    workoutPlanElement.innerHTML = `
                        <h3>YOUR WORKOUT PLAN</h3>
                        <p><b>Goals:</b> Improve cardiovascular endurance, build and tone muscle, enhance flexibility and core strength, promote fat loss, and improve metabolic health.</p>
                        <h4>Weekly Schedule</h4>
                        <ul>
                            <li><b>Day 1: Cardio & Core</b>
                                <ul>
                                    <li><b>Warm-Up:</b> 5–10 minutes of dynamic stretches or light jogging.</li>
                                    <li><b>Cardio:</b> 35–45 minutes:
                                        <ul>
                                            <li>Option 1: Brisk walking or jogging (mix steady pace with 2-3 short sprints).</li>
                                            <li>Option 2: Cycling, swimming, or elliptical.</li>
                                        </ul>
                                    </li>
                                    <li><b>Core Work:</b>
                                        <ul>
                                            <li>Plank: 3 sets of 30–60 seconds</li>
                                            <li>Mountain climbers: 3 sets of 15–20 reps</li>
                                            <li>Bicycle crunches: 3 sets of 15 reps per side</li>
                                            <li>Leg raises: 3 sets of 10–15 reps</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><b>Day 2: Strength Training (Upper Body)</b>
                                <ul>
                                    <li><b>Warm-Up:</b> Arm circles and shoulder stretches.</li>
                                    <li><b>Exercises:</b>
                                        <ul>
                                            <li>Dumbbell bench press: 3 sets of 8–12 reps</li>
                                            <li>Bent-over rows (dumbbell or barbell): 3 sets of 8–12 reps</li>
                                            <li>Shoulder press: 3 sets of 8–12 reps</li>
                                            <li>Tricep dips (using a bench): 3 sets of 10–12 reps</li>
                                            <li>Bicep curls: 3 sets of 10–12 reps</li>
                                        </ul>
                                    </li>
                                    <li><b>Cool-Down:</b> Stretch shoulders, arms, and chest.</li>
                                </ul>
                            </li>
                            <li><b>Day 3: Active Recovery</b>
                                <ul>
                                    <li>Light yoga or stretching for 20–30 minutes.</li>
                                    <li>Walk at a relaxed pace for 20–30 minutes.</li>
                                    <li>Focus on mobility and foam rolling for tight muscles.</li>
                                </ul>
                            </li>
                            <li><b>Day 4: Cardio (HIIT)</b>
                                <ul>
                                    <li><b>Warm-Up:</b> 5–10 minutes of light jogging or brisk walking.</li>
                                    <li><b>HIIT Workout (20–30 minutes):</b>
                                        <ul>
                                            <li>30 seconds sprint/high-intensity effort</li>
                                            <li>1 minute slow pace recovery (walk or jog)</li>
                                            <li>Repeat for 6–10 rounds.</li>
                                        </ul>
                                    </li>
                                    <li><b>Cool-Down:</b> 5–10 minutes of light jogging/walking and stretching.</li>
                                </ul>
                            </li>
                            <li><b>Day 5: Strength Training (Lower Body)</b>
                                <ul>
                                    <li><b>Warm-Up:</b> Dynamic stretches for legs and hips.</li>
                                    <li><b>Exercises:</b>
                                        <ul>
                                            <li>Squats (bodyweight or weighted): 3 sets of 12–15 reps</li>
                                            <li>Deadlifts (light to moderate weight): 3 sets of 8–12 reps</li>
                                            <li>Walking lunges: 3 sets of 10–12 reps per leg</li>
                                            <li>Glute bridges: 3 sets of 12–15 reps</li>
                                            <li>Calf raises: 3 sets of 15–20 reps</li>
                                        </ul>
                                    </li>
                                    <li><b>Cool-Down:</b> Stretch hamstrings, quads, and hips.</li>
                                </ul>
                            </li>
                            <li><b>Day 6: Full-Body Circuit</b>
                                <ul>
                                    <li><b>Perform 3 rounds of the following (rest 1–2 minutes between rounds):</b>
                                        <ul>
                                            <li>Jumping jacks: 30 seconds</li>
                                            <li>Push-ups: 10–15 reps</li>
                                            <li>Bodyweight squats: 12–15 reps</li>
                                            <li>Plank: 30–60 seconds</li>
                                            <li>Burpees or step-ups: 10 reps (modify for low impact as needed)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><b>Day 7: Rest or Active Recovery</b>
                                <ul>
                                    <li>Rest and focus on recovery, or:</li>
                                    <li>Light yoga/stretching: 20–30 minutes</li>
                                    <li>Optional: Leisure walk or swim.</li>
                                </ul>
                            </li>
                        </ul>
                    `;

        
                } else if (weight > 200) {
                    workoutPlanElement.innerHTML = `
                        <h3>YOUR WORKOUT PLAN</h3>
                        <p><b>Goals:</b> Gradually improve cardiovascular fitness, build strength, support healthy weight loss, enhance flexibility, reduce joint strain, and promote long-term consistency.</p>
                        <h4>Weekly Schedule</h4>
                        <ul>
                            <li><b>Day 1: Low-Impact Cardio & Core</b>
                                <ul>
                                    <li><b>Warm-Up:</b> 5–10 minutes of dynamic stretches (arm swings, hip circles, marching in place).</li>
                                    <li><b>Cardio:</b> 30 minutes of low-impact activity:
                                        <ul>
                                            <li>Option 1: Walking at a brisk pace</li>
                                            <li>Option 2: Swimming or water aerobics (great for joint relief)</li>
                                            <li>Option 3: Stationary cycling (adjust resistance as comfortable)</li>
                                        </ul>
                                    </li>
                                    <li><b>Core Work:</b>
                                        <ul>
                                            <li>Seated knee lifts: 2 sets of 10–12 reps per side</li>
                                            <li>Wall plank (forearms or hands against a wall): 2–3 sets of 20–30 seconds</li>
                                            <li>Dead bugs (lying on back): 2 sets of 8–10 reps per side</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><b>Day 2: Strength Training (Upper Body Focus)</b>
                                <ul>
                                    <li><b>Warm-Up:</b> Shoulder rolls and light arm stretches.</li>
                                    <li><b>Exercises:</b>
                                        <ul>
                                            <li>Wall push-ups: 2–3 sets of 10–12 reps (progress to countertop push-ups as strength improves)</li>
                                            <li>Seated dumbbell press (light weights): 2–3 sets of 8–12 reps</li>
                                            <li>Seated dumbbell bicep curls: 2–3 sets of 10–12 reps</li>
                                            <li>Dumbbell rows (seated or standing): 2–3 sets of 8–12 reps per arm</li>
                                        </ul>
                                    </li>
                                    <li><b>Cool-Down:</b> Stretch shoulders, arms, and chest.</li>
                                </ul>
                            </li>
                            <li><b>Day 3: Active Recovery</b>
                                <ul>
                                    <li>Light stretching or yoga for 20–30 minutes.</li>
                                    <li>Option: Gentle walk at a relaxed pace for 15–20 minutes.</li>
                                    <li>Focus on mobility exercises for hips, shoulders, and back.</li>
                                </ul>
                            </li>
                            <li><b>Day 4: Low-Impact HIIT or Interval Cardio</b>
                                <ul>
                                    <li><b>Warm-Up:</b> 5–10 minutes of slow walking or gentle stretches.</li>
                                    <li><b>Workout (15–20 minutes):</b>
                                        <ul>
                                            <li>30 seconds of brisk walking or high effort (e.g., fast cycling)</li>
                                            <li>1 minute of slow walking or light pedaling</li>
                                            <li>Repeat for 6–8 rounds.</li>
                                        </ul>
                                    </li>
                                    <li><b>Cool-Down:</b> Walk slowly for 5–10 minutes and stretch.</li>
                                </ul>
                            </li>
                            <li><b>Day 5: Strength Training (Lower Body Focus)</b>
                                <ul>
                                    <li><b>Warm-Up:</b> Dynamic leg stretches (leg swings, toe touches).</li>
                                    <li><b>Exercises:</b>
                                        <ul>
                                            <li>Chair-assisted squats: 2–3 sets of 10–12 reps</li>
                                            <li>Step-ups (use a low step or sturdy surface): 2–3 sets of 8–10 reps per leg</li>
                                            <li>Glute bridges (on back): 2–3 sets of 10–12 reps</li>
                                            <li>Calf raises (hold a chair for balance): 2–3 sets of 12–15 reps</li>
                                        </ul>
                                    </li>
                                    <li><b>Cool-Down:</b> Stretch quads, hamstrings, and calves.</li>
                                </ul>
                            </li>
                            <li><b>Day 6: Full-Body Circuit</b>
                                <ul>
                                    <li><b>Perform 2–3 rounds of the following (rest 1–2 minutes between rounds):</b>
                                        <ul>
                                            <li>Step-in-place (marching): 30 seconds</li>
                                            <li>Wall push-ups: 10–12 reps</li>
                                            <li>Chair-assisted squats: 10 reps</li>
                                            <li>Side leg lifts (hold onto a wall for balance): 10 reps per leg</li>
                                            <li>Seated arm raises (with or without light weights): 10–12 reps</li>
                                        </ul>
                                    </li>
                                    <li>End with a 5–10 minute walk and stretching.</li>
                                </ul>
                            </li>
                            <li><b>Day 7: Rest or Gentle Active Recovery</b>
                                <ul>
                                    <li>Gentle yoga or stretching for 15–20 minutes.</li>
                                    <li>Optional: Relaxing walk at an easy pace for 10–15 minutes.</li>
                                </ul>
                            </li>
                        </ul>
                    `;


        } else {
            
            workoutPlanElement.innerHTML = `<p>Workout plans for higher weight categories coming soon!</p>`;
        }
    } else {
        caloriesResultElement.innerHTML = `<p>Please fill out all fields to get your personalized workout plan.</p>`;
    }
}



function calculateBMI() {
    const weight = parseFloat(document.getElementById('bmi-weight').value);
    const heightFeet = parseFloat(document.getElementById('bmi-height-feet').value);
    const heightInches = parseFloat(document.getElementById('bmi-height-inches').value);

    const bmiResultElement = document.getElementById('bmi-result');

    if (weight && heightFeet >= 0 && heightInches >= 0) {
        
        const totalHeightInches = (heightFeet * 12) + heightInches;

        const bmi = (weight / (totalHeightInches * totalHeightInches)) * 703;
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        bmiResultElement.innerHTML = `
            <p>Your BMI is <strong>${bmi.toFixed(2)}</strong>, which is considered <strong>${category}</strong>.</p>
        `;
    } else {
        bmiResultElement.innerHTML = `
            <p>Please enter your weight and complete both height fields.</p>
        `;
    }
}




