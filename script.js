const syllabus = {
  JSS1: [
    { title: "Number & numeration", icon: "◉", summary: "Read, write, compare and arrange whole numbers, including large numbers.", objectives: ["Read and write numbers in figures and words.", "Compare and arrange whole numbers using place value.", "Use Roman numerals and recognize common number patterns."], example: ["What is the value of 7 in 472,816?", "The 7 is in the ten-thousands place, so its value is 70,000."], questions: [["Write 305,042 in words.", "Three hundred and five thousand and forty-two."], ["What is the value of 8 in 286,451?", "The 8 is in the ten-thousands place. Its value is 80,000."], ["Arrange 4,609; 4,096; 4,690 in ascending order.", "4,096 < 4,609 < 4,690."]]},
    { title: "Whole-number operations", icon: "＋", summary: "Practise addition, subtraction, multiplication and division with whole numbers.", objectives: ["Use written and mental methods for the four operations.", "Apply the order of operations to simple calculations.", "Solve word problems and check answers using estimation."], example: ["Calculate 36 + 4 × 5.", "Multiply before adding: 4 × 5 = 20, then 36 + 20 = 56."], questions: [["Calculate 408 + 275.", "408 + 275 = 683."], ["Calculate 900 − 468.", "900 − 468 = 432."], ["A school packs 144 pencils equally into 12 boxes. How many in each box?", "144 ÷ 12 = 12 pencils per box."]]},
    { title: "Factors & multiples", icon: "✣", summary: "Explore factors, multiples, prime numbers, HCF and LCM.", objectives: ["Find factors and multiples of whole numbers.", "Identify prime and composite numbers.", "Calculate the highest common factor and lowest common multiple."], example: ["Find the HCF of 12 and 18.", "Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18. The HCF is 6."], questions: [["List all the factors of 20.", "1, 2, 4, 5, 10 and 20."], ["Is 29 prime or composite?", "29 is prime: its only factors are 1 and 29."], ["Find the LCM of 4 and 6.", "Multiples: 4, 8, 12 … and 6, 12 … The LCM is 12."]]},
    { title: "Fractions & decimals", icon: "½", summary: "Compare, simplify and calculate with fractions and decimal numbers.", objectives: ["Convert between improper fractions and mixed numbers.", "Add, subtract, multiply and divide fractions.", "Compare decimals and round them to a stated place."], example: ["Calculate 1/2 + 1/4.", "Use a common denominator: 2/4 + 1/4 = 3/4."], questions: [["Simplify 12/18.", "Divide the numerator and denominator by 6: 12/18 = 2/3."], ["Calculate 2/3 + 1/6.", "2/3 = 4/6, so 4/6 + 1/6 = 5/6."], ["Write 0.75 as a fraction in its simplest form.", "0.75 = 75/100 = 3/4."]]},
    { title: "Percentages", icon: "%", summary: "Understand percent as a fraction out of 100 and find percentages of quantities.", objectives: ["Convert between fractions, decimals and percentages.", "Find a percentage of a quantity.", "Solve simple real-life percentage problems."], example: ["Find 25% of 80.", "25% = 1/4, and 1/4 × 80 = 20."], questions: [["Write 0.4 as a percentage.", "0.4 × 100% = 40%."], ["Find 10% of 350.", "10% of 350 = 350 ÷ 10 = 35."], ["A class has 40 pupils. 50% are girls. How many girls?", "50% × 40 = 20 girls."]]},
    { title: "Directed numbers", icon: "±", summary: "Use positive and negative numbers on a number line and in calculations.", objectives: ["Locate directed numbers on a number line.", "Add and subtract positive and negative numbers.", "Recognize integers in everyday contexts such as temperature."], example: ["Calculate −3 + 8.", "Start at −3 and move 8 places right: the answer is 5."], questions: [["Calculate 6 − 10.", "6 − 10 = −4."], ["Calculate −4 + (−3).", "Adding two negative numbers gives −7."], ["The temperature is 2°C and falls by 7°C. What is it now?", "2 − 7 = −5°C."]]},
    { title: "Approximation & estimation", icon: "≈", summary: "Round whole numbers and decimals, then estimate to check answers.", objectives: ["Round numbers to the nearest 10, 100 or 1,000.", "Round decimals to a given decimal place.", "Estimate calculations by rounding first."], example: ["Round 4,768 to the nearest hundred.", "The tens digit is 6, so round the hundreds digit up: 4,800."], questions: [["Round 3,649 to the nearest thousand.", "The hundreds digit is 6, so round up to 4,000."], ["Round 8.376 to 2 decimal places.", "The third decimal digit is 6, so 8.376 rounds to 8.38."], ["Estimate 49 × 21 by rounding to the nearest ten.", "50 × 20 = 1,000."]]},
    { title: "Ratio & proportion", icon: "∶", summary: "Compare quantities using ratios and solve simple sharing and scaling problems.", objectives: ["Write and simplify ratios in their correct order.", "Share amounts in a given ratio.", "Recognize equivalent ratios and simple proportions."], example: ["Simplify the ratio 8:12.", "Divide both parts by their HCF, 4. The simplified ratio is 2:3."], questions: [["Simplify 15:25.", "Divide both terms by 5: 3:5."], ["Share 20 mangoes in the ratio 1:3.", "There are 4 parts; each is 20 ÷ 4 = 5. The shares are 5 and 15."], ["If 2 notebooks cost ₦600, what do 4 notebooks cost at the same rate?", "One notebook costs ₦300, so 4 cost ₦1,200."]]},
    { title: "Algebraic expressions", icon: "x²", summary: "Use letters for unknown numbers and simplify expressions by collecting like terms.", objectives: ["Identify variables, coefficients and constants.", "Translate simple word phrases into expressions.", "Collect like terms and substitute values into expressions."], example: ["Simplify 3a + 2a − 4.", "Collect the like terms: 3a + 2a − 4 = 5a − 4."], questions: [["Simplify 7x − 2x + 3.", "7x − 2x + 3 = 5x + 3."], ["Write “5 more than n” as an expression.", "n + 5."], ["Find 2a + 3 when a = 4.", "2(4) + 3 = 8 + 3 = 11."]]},
    { title: "Simple equations", icon: "=", summary: "Solve one-step and two-step linear equations by keeping both sides balanced.", objectives: ["Understand the equals sign as a balance.", "Solve equations using inverse operations.", "Check a solution by substituting it into the equation."], example: ["Solve x + 7 = 12.", "Subtract 7 from both sides: x = 5. Check: 5 + 7 = 12."], questions: [["Solve y − 4 = 9.", "Add 4 to both sides: y = 13."], ["Solve 3a = 21.", "Divide both sides by 3: a = 7."], ["Solve 2x + 3 = 11.", "Subtract 3 to get 2x = 8; divide by 2: x = 4."]]},
    { title: "Lines & angles", icon: "∠", summary: "Name types of angles and use angle facts on straight lines and around a point.", objectives: ["Recognize acute, right, obtuse, straight and reflex angles.", "Use the facts that a straight line is 180° and a full turn is 360°.", "Identify parallel and perpendicular lines."], example: ["An angle on a straight line is 125°. Find the other angle.", "Angles on a straight line total 180°: 180° − 125° = 55°."], questions: [["What type of angle is 42°?", "An acute angle: it is less than 90°."], ["Find the missing angle on a straight line if the other is 68°.", "180° − 68° = 112°."], ["Angles around a point total how many degrees?", "360°."]]},
    { title: "Plane shapes", icon: "⬡", summary: "Identify and classify triangles, quadrilaterals and other two-dimensional shapes.", objectives: ["Name shapes by their sides and angles.", "Classify triangles and common quadrilaterals.", "Use the fact that interior angles of a triangle total 180°."], example: ["A triangle has angles 50° and 60°. Find the third angle.", "Triangle angles total 180°: 180° − 50° − 60° = 70°."], questions: [["How many sides does a hexagon have?", "Six sides."], ["What is a quadrilateral?", "A polygon with four sides and four angles."], ["A triangle has angles 90° and 35°. Find the third angle.", "180° − 90° − 35° = 55°."]]},
    { title: "Perimeter & area", icon: "▱", summary: "Measure the distance around a shape and the surface it covers.", objectives: ["Find perimeter by adding lengths around a shape.", "Calculate the area of rectangles and squares.", "Include correct units in measurement answers."], example: ["Find the area of a rectangle 8 cm long and 3 cm wide.", "Area = length × width = 8 × 3 = 24 cm²."], questions: [["Find the perimeter of a square with side 5 cm.", "4 × 5 = 20 cm."], ["Find the area of a 9 m by 4 m rectangle.", "9 × 4 = 36 m²."], ["A rectangle is 12 cm long and 7 cm wide. Find its perimeter.", "2 × (12 + 7) = 38 cm."]]},
    { title: "Measurement & time", icon: "◷", summary: "Choose appropriate units, convert measures and solve everyday time problems.", objectives: ["Convert between common metric units of length, mass and capacity.", "Read time and calculate elapsed time.", "Select a suitable unit and include it in each answer."], example: ["Convert 3.5 m to centimetres.", "1 m = 100 cm, so 3.5 × 100 = 350 cm."], questions: [["Convert 2.4 kg to grams.", "1 kg = 1,000 g, so 2.4 kg = 2,400 g."], ["A lesson starts at 9:35 am and lasts 50 minutes. When does it end?", "25 minutes takes it to 10:00 am, then 25 more minutes: 10:25 am."], ["How many millilitres are in 1.5 litres?", "1 litre = 1,000 ml, so 1.5 litres = 1,500 ml."]]},
    { title: "Data & statistics", icon: "▥", summary: "Collect, organize and interpret information using tables, charts and averages.", objectives: ["Read and construct simple frequency tables and bar charts.", "Find the mode and range of a small data set.", "Calculate the mean by dividing the total by the number of values."], example: ["Find the mean of 2, 4 and 6.", "Add the values: 2 + 4 + 6 = 12. Divide by 3: mean = 4."], questions: [["Find the mode of 3, 5, 5, 7.", "5 occurs most often, so the mode is 5."], ["Find the range of 4, 9, 2, 7.", "Range = largest − smallest = 9 − 2 = 7."], ["Find the mean of 3, 5 and 10.", "(3 + 5 + 10) ÷ 3 = 18 ÷ 3 = 6."]]}
  ],
  JSS2: [
    { title: "Number bases", icon: "₂", summary: "Understand place value in different bases and convert simple numbers between bases.", objectives: ["Read and write numerals in base two and base ten.", "Convert simple base-two numbers to base ten.", "Convert small whole numbers from base ten to base two."], example: ["Convert 101₂ to base ten.", "101₂ = (1 × 4) + (0 × 2) + (1 × 1) = 5₁₀."], questions: [["Convert 11₂ to base ten.", "(1 × 2) + 1 = 3₁₀."], ["Convert 6₁₀ to base two.", "6 = 4 + 2, so 6₁₀ = 110₂."], ["Convert 1001₂ to base ten.", "(1 × 8) + (0 × 4) + (0 × 2) + 1 = 9₁₀."]]},
    { title: "Fractions, decimals & percentages", icon: "¾", summary: "Calculate with fractions and connect fractions, decimals, percentages and ratios.", objectives: ["Perform the four operations with fractions.", "Convert between fractions, decimals and percentages.", "Solve percentage increase and decrease problems."], example: ["Find 15% of ₦2,000.", "10% is ₦200 and 5% is ₦100, so 15% = ₦300."], questions: [["Calculate 3/4 − 1/8.", "3/4 = 6/8; 6/8 − 1/8 = 5/8."], ["Express 3/5 as a percentage.", "3/5 × 100% = 60%."], ["Increase 80 by 25%.", "25% of 80 is 20; 80 + 20 = 100."]]},
    { title: "Ratio, rates & proportion", icon: "↗", summary: "Apply ratio, unit rates and direct proportion to everyday problems.", objectives: ["Divide quantities in a ratio.", "Find unit rates such as cost per item or distance per hour.", "Solve direct proportion problems using equivalent ratios."], example: ["A car travels 150 km in 3 hours. Find its average speed.", "Speed = distance ÷ time = 150 ÷ 3 = 50 km/h."], questions: [["Share ₦2,400 in the ratio 5:3.", "There are 8 parts; one part is ₦300. Shares: ₦1,500 and ₦900."], ["If 6 oranges cost ₦900, find the cost of 1 orange.", "₦900 ÷ 6 = ₦150."], ["A recipe for 4 people needs 200 g of rice. How much for 6 people?", "200 × 6/4 = 300 g."]]},
    { title: "Directed numbers", icon: "±", summary: "Calculate with positive and negative integers, including multiplication and division.", objectives: ["Add and subtract directed numbers confidently.", "Multiply and divide integers using sign rules.", "Apply integers to temperature, money and elevation."], example: ["Calculate (−4) × 3.", "A negative times a positive is negative: (−4) × 3 = −12."], questions: [["Calculate −8 + 13.", "−8 + 13 = 5."], ["Calculate (−6) × (−2).", "A negative times a negative is positive: 12."], ["Calculate 18 ÷ (−3).", "A positive divided by a negative is negative: −6."]]},
    { title: "Approximation & standard form", icon: "≈", summary: "Round to significant figures and write very large or small numbers in standard form.", objectives: ["Round numbers to a stated number of significant figures.", "Express numbers in the form A × 10ⁿ, where 1 ≤ A < 10.", "Use rounding to estimate and check calculations."], example: ["Write 45,000 in standard form.", "Move the decimal point 4 places left: 45,000 = 4.5 × 10⁴."], questions: [["Write 0.0032 in standard form.", "Move the decimal point 3 places right: 3.2 × 10⁻³."], ["Round 6,482 to 2 significant figures.", "The first two digits are 6 and 4; the next digit is 8, so 6,482 ≈ 6,500."], ["Write 7.1 × 10³ as an ordinary number.", "Move the decimal point 3 places right: 7,100."]]},
    { title: "Indices & powers", icon: "xⁿ", summary: "Use indices to express repeated multiplication and simplify simple powers.", objectives: ["Write repeated multiplication using index notation.", "Evaluate squares, cubes and simple powers.", "Use basic rules for multiplying and dividing powers with the same base."], example: ["Evaluate 2³.", "2³ means 2 × 2 × 2 = 8."], questions: [["Write 5 × 5 × 5 × 5 using an index.", "5⁴."], ["Evaluate 3² + 2³.", "3² + 2³ = 9 + 8 = 17."], ["Simplify 2³ × 2².", "Add the indices for the same base: 2⁵ = 32."]]},
    { title: "Algebraic expressions", icon: "x²", summary: "Expand brackets and factorize simple algebraic expressions.", objectives: ["Collect like terms in algebraic expressions.", "Expand a single bracket using the distributive law.", "Factorize by taking out a common factor."], example: ["Expand 3(x + 4).", "Multiply each term by 3: 3(x + 4) = 3x + 12."], questions: [["Simplify 5a + 3b − 2a + b.", "Collect like terms: 3a + 4b."], ["Expand 2(3x − 5).", "2 × 3x − 2 × 5 = 6x − 10."], ["Factorize 8y + 12.", "The HCF is 4: 8y + 12 = 4(2y + 3)."]]},
    { title: "Equations & inequalities", icon: "≤", summary: "Solve linear equations and represent simple inequalities.", objectives: ["Solve two-step linear equations and check solutions.", "Solve simple inequalities using inverse operations.", "Show an inequality on a number line."], example: ["Solve 3x − 4 = 11.", "Add 4: 3x = 15. Divide by 3: x = 5."], questions: [["Solve 4y + 3 = 19.", "Subtract 3: 4y = 16. Divide by 4: y = 4."], ["Solve x + 2 < 7.", "Subtract 2 from both sides: x < 5."], ["Solve 5a = 35.", "Divide both sides by 5: a = 7."]]},
    { title: "Angles & polygons", icon: "⬡", summary: "Use angle facts with parallel lines and calculate interior angles of polygons.", objectives: ["Use corresponding and alternate angles in parallel lines.", "Find the sum of interior angles in a polygon.", "Calculate unknown angles in triangles and quadrilaterals."], example: ["Find the interior angle sum of a pentagon.", "Sum = (n − 2) × 180° = (5 − 2) × 180° = 540°."], questions: [["Find the interior angle sum of a hexagon.", "(6 − 2) × 180° = 720°."], ["A quadrilateral has angles 90°, 80° and 110°. Find the fourth.", "Angles total 360°: 360° − 280° = 80°."], ["One angle on a straight line is 127°. Find the other.", "180° − 127° = 53°."]]},
    { title: "Geometric constructions", icon: "⌖", summary: "Use a ruler, compass and protractor to construct and measure shapes accurately.", objectives: ["Bisect a line segment and an angle using a compass.", "Construct triangles from given side lengths.", "Read scales and measure angles accurately with a protractor."], example: ["What is an angle bisector?", "A line or ray that divides an angle into two equal angles. A 60° angle becomes two 30° angles."], questions: [["An angle of 80° is bisected. How large is each part?", "80° ÷ 2 = 40°."], ["Can a triangle be made from sides 2 cm, 3 cm and 6 cm?", "No. The two shorter sides total 5 cm, which is less than 6 cm."], ["What instrument is used to measure an angle?", "A protractor."]]},
    { title: "Scale drawing", icon: "⌗", summary: "Use a stated scale to draw plans and work out real distances from a map.", objectives: ["Interpret a scale such as 1 cm represents 5 km.", "Convert between drawing distances and actual distances.", "Measure and draw lengths accurately using a ruler."], example: ["On a map, 1 cm represents 4 km. What real distance is 3 cm?", "3 × 4 = 12 km."], questions: [["A plan uses a scale of 1:100. What real length does 5 cm represent?", "5 × 100 = 500 cm = 5 m."], ["On a map, 2 cm represents 10 km. How far does 7 cm represent?", "Each centimetre represents 5 km, so 7 cm represents 35 km."], ["A 12 m wall is drawn using 1 cm to represent 3 m. How long is it on the drawing?", "12 ÷ 3 = 4 cm."]]},
    { title: "Perimeter, area & volume", icon: "▱", summary: "Calculate perimeters and areas of common shapes and volumes of simple solids.", objectives: ["Find the area of triangles and parallelograms.", "Calculate the volume of cuboids.", "Use square and cubic units correctly."], example: ["Find the volume of a cuboid 4 cm × 3 cm × 5 cm.", "Volume = length × width × height = 4 × 3 × 5 = 60 cm³."], questions: [["Find the area of a triangle with base 10 cm and height 6 cm.", "Area = 1/2 × base × height = 1/2 × 10 × 6 = 30 cm²."], ["Find the volume of a 7 m × 2 m × 3 m cuboid.", "7 × 2 × 3 = 42 m³."], ["Find the area of a parallelogram with base 8 cm and height 5 cm.", "Area = base × perpendicular height = 8 × 5 = 40 cm²."]]},
    { title: "Statistics & data", icon: "▥", summary: "Present grouped or ungrouped data and interpret averages and charts.", objectives: ["Calculate the mean, median, mode and range.", "Organize data in frequency tables and read charts.", "Choose a suitable average for a simple data set."], example: ["Find the median of 2, 4, 7, 9, 11.", "The numbers are ordered; the middle value is 7, so the median is 7."], questions: [["Find the median of 3, 8, 5, 2, 7.", "Order them: 2, 3, 5, 7, 8. The middle number is 5."], ["Find the mean of 4, 6, 8 and 10.", "Total = 28; mean = 28 ÷ 4 = 7."], ["Find the mode of 2, 3, 3, 4, 5, 3.", "3 appears most often, so the mode is 3."]]},
    { title: "Probability", icon: "◌", summary: "Describe likelihood and calculate simple probabilities from equally likely outcomes.", objectives: ["Use a scale from impossible to certain to describe events.", "Calculate probability as favourable outcomes over total outcomes.", "Recognize that probabilities lie between 0 and 1."], example: ["A fair coin is tossed. What is the probability of heads?", "There is 1 head outcome in 2 equally likely outcomes: P(heads) = 1/2."], questions: [["What is the probability of rolling a 7 on a standard six-sided die?", "0: a standard die has no face showing 7, so it is impossible."], ["What is the probability of rolling an even number on a fair six-sided die?", "Three of six outcomes are even: 3/6 = 1/2."], ["A bag has 3 red and 2 blue balls. What is P(blue)?", "There are 2 blue balls out of 5: P(blue) = 2/5."]]},
    { title: "Commercial arithmetic", icon: "₦", summary: "Solve everyday money problems involving profit, loss, discount and simple interest.", objectives: ["Calculate profit and loss from cost and selling prices.", "Find simple interest using principal, rate and time.", "Apply percentage discount to prices."], example: ["An item costs ₦500 and sells for ₦650. Find the profit.", "Profit = selling price − cost price = ₦650 − ₦500 = ₦150."], questions: [["An item bought for ₦800 is sold for ₦700. Find the loss.", "Loss = ₦800 − ₦700 = ₦100."], ["Find 10% simple interest on ₦2,000 for 1 year.", "Interest = P × R × T / 100 = 2,000 × 10 × 1 / 100 = ₦200."], ["A ₦1,000 item has a 20% discount. Find its sale price.", "Discount = ₦200; sale price = ₦1,000 − ₦200 = ₦800."]]}
  ]
};

const practiceWorkings = {
  JSS1: {
    "Number & numeration": [
      "Separate the number into place-value groups: 305,042 = 305 thousand + 42. Read the groups: three hundred and five thousand; forty-two.",
      "In 286,451, the 8 is in the ten-thousands place. Calculate 8 × 10,000 = 80,000.",
      "Compare the values: 4,096 has 0 hundreds, while 4,609 and 4,690 each have 6 hundreds. Compare those last two: 0 tens < 9 tens. Order: 4,096 < 4,609 < 4,690."
    ],
    "Whole-number operations": [
      "Add the ones: 8 + 5 = 13; write 3 and carry 1. Add tens: 0 + 7 + 1 = 8. Add hundreds: 4 + 2 = 6. Total: 683.",
      "Borrow across the zero: 900 − 468 = 800 + 90 + 10 − 468 = 432.",
      "Divide equally: 144 ÷ 12 = 12. Check: 12 boxes × 12 pencils = 144 pencils."
    ],
    "Factors & multiples": [
      "Make factor pairs of 20: 1 × 20, 2 × 10, 4 × 5. List each factor once: 1, 2, 4, 5, 10, 20.",
      "Test divisibility by primes up to √29 ≈ 5.4: 29 is not divisible by 2, 3 or 5. Its only factors are 1 and 29, so it is prime.",
      "List multiples: 4, 8, 12, 16 … and 6, 12, 18 …. The first common multiple is 12, so LCM = 12."
    ],
    "Fractions & decimals": [
      "Find a common factor of 12 and 18: HCF = 6. Divide both parts: 12 ÷ 6 = 2 and 18 ÷ 6 = 3. So 12/18 = 2/3.",
      "Use denominator 6: 2/3 = 4/6. Add the numerators: 4/6 + 1/6 = 5/6.",
      "Write the decimal as hundredths: 0.75 = 75/100. Divide top and bottom by 25: 75/100 = 3/4."
    ],
    "Percentages": [
      "Percent means per hundred: 0.4 × 100 = 40, so 0.4 = 40%.",
      "10% = 10/100 = 1/10. Calculate 350 ÷ 10 = 35.",
      "Find half of the class: 50% = 1/2. Calculate 40 ÷ 2 = 20 girls."
    ],
    "Directed numbers": [
      "Subtract 10 from 6: 6 − 10 = −4 (move 10 places left from 6 on a number line).",
      "Adding a negative means move left: −4 + (−3) = −4 − 3 = −7.",
      "A fall of 7 means subtract 7 from 2: 2 − 7 = −5°C."
    ],
    "Approximation & estimation": [
      "The thousands digit is 3 and the next digit (hundreds) is 6. Since 6 ≥ 5, round up: 3,649 ≈ 4,000.",
      "Keep two decimal places: 8.37. The next digit is 6, so round the hundredths digit up: 8.38.",
      "Round each factor to the nearest ten: 49 ≈ 50 and 21 ≈ 20. Estimate 50 × 20 = 1,000."
    ],
    "Ratio & proportion": [
      "Find the HCF of 15 and 25: 5. Divide both terms by 5: 15:25 = 3:5.",
      "Add ratio parts: 1 + 3 = 4. One part is 20 ÷ 4 = 5 mangoes. Shares: 1 × 5 = 5 and 3 × 5 = 15.",
      "Find the unit cost: ₦600 ÷ 2 = ₦300 each. For 4 notebooks: 4 × ₦300 = ₦1,200."
    ],
    "Algebraic expressions": [
      "Collect the x terms: 7x − 2x = 5x. Keep the constant +3. Result: 5x + 3.",
      "“More than” means add: start with n, then add 5. Expression: n + 5.",
      "Substitute a = 4: 2a + 3 = 2 × 4 + 3 = 8 + 3 = 11."
    ],
    "Simple equations": [
      "Undo subtracting 4 by adding 4 to both sides: y − 4 + 4 = 9 + 4, so y = 13. Check: 13 − 4 = 9.",
      "Undo multiplying by 3 by dividing both sides by 3: 3a ÷ 3 = 21 ÷ 3, so a = 7. Check: 3 × 7 = 21.",
      "Subtract 3 from both sides: 2x = 8. Divide both sides by 2: x = 4. Check: 2 × 4 + 3 = 11."
    ],
    "Lines & angles": [
      "An acute angle is greater than 0° and less than 90°. Since 42° < 90°, it is acute.",
      "Angles on a straight line add to 180°. Missing angle = 180° − 68° = 112°.",
      "A full turn around a point is four right angles: 4 × 90° = 360°."
    ],
    "Plane shapes": [
      "A hexagon has six sides. (The prefix “hex-” means six.)",
      "A quadrilateral is a polygon with four straight sides; it also has four vertices and four angles.",
      "Triangle angles add to 180°. Missing angle = 180° − 90° − 35° = 55°."
    ],
    "Perimeter & area": [
      "A square has four equal sides. Perimeter = 4 × 5 cm = 20 cm.",
      "Rectangle area = length × width = 9 m × 4 m = 36 m².",
      "Perimeter = 2 × (length + width) = 2 × (12 + 7) = 2 × 19 = 38 cm."
    ],
    "Measurement & time": [
      "Convert kilograms to grams: 1 kg = 1,000 g. So 2.4 × 1,000 = 2,400 g.",
      "From 9:35 to 10:00 is 25 minutes. There are 50 − 25 = 25 minutes left. End time: 10:25 am.",
      "Convert litres to millilitres: 1 litre = 1,000 ml. So 1.5 × 1,000 = 1,500 ml."
    ],
    "Data & statistics": [
      "Count each value: 3 appears twice; 5 and 7 appear once each. The most frequent value (mode) is 3.",
      "Range = largest value − smallest value = 9 − 2 = 7.",
      "Add the values: 3 + 5 + 10 = 18. Divide by the 3 values: 18 ÷ 3 = 6."
    ]
  },
  JSS2: {
    "Number bases": [
      "In base two, the places from right to left are 1 and 2. Calculate (1 × 2) + (1 × 1) = 3₁₀.",
      "Write 6 as powers of 2: 6 = 4 + 2 = (1 × 4) + (1 × 2) + (0 × 1). Therefore 6₁₀ = 110₂.",
      "The base-two places are 8, 4, 2, 1. Calculate (1 × 8) + (0 × 4) + (0 × 2) + (1 × 1) = 9₁₀."
    ],
    "Fractions, decimals & percentages": [
      "Use denominator 8: 3/4 = 6/8. Subtract: 6/8 − 1/8 = 5/8.",
      "Convert to a percentage: (3 ÷ 5) × 100% = 60%.",
      "Find the increase: 25% of 80 = 80 ÷ 4 = 20. Add it to the original: 80 + 20 = 100."
    ],
    "Ratio, rates & proportion": [
      "Add the parts: 5 + 3 = 8. One part = ₦2,400 ÷ 8 = ₦300. Shares: 5 × ₦300 = ₦1,500 and 3 × ₦300 = ₦900.",
      "Find the cost per orange: ₦900 ÷ 6 = ₦150 per orange.",
      "Scale the recipe by 6 ÷ 4 = 1.5. Rice needed = 200 g × 1.5 = 300 g."
    ],
    "Directed numbers": [
      "Starting at −8, move 13 places right: −8 + 13 = 5.",
      "Two negative factors make a positive product: 6 × 2 = 12, so (−6) × (−2) = 12.",
      "Different signs give a negative quotient. Calculate 18 ÷ 3 = 6, so 18 ÷ (−3) = −6."
    ],
    "Approximation & standard form": [
      "Move the decimal point 3 places right to get 3.2. Compensate with 10⁻³: 0.0032 = 3.2 × 10⁻³.",
      "Keep the first two significant digits: 6 and 4. The next digit is 8, so round 64 up to 65. Thus 6,482 ≈ 6,500 (2 s.f.).",
      "A power of 10 with exponent 3 moves the decimal point three places right: 7.1 × 10³ = 7,100."
    ],
    "Indices & powers": [
      "There are four factors of 5, so the index is 4: 5 × 5 × 5 × 5 = 5⁴.",
      "Evaluate each power first: 3² = 9 and 2³ = 8. Add: 9 + 8 = 17.",
      "For the same base, add exponents: 2³ × 2² = 2⁽³⁺²⁾ = 2⁵ = 32."
    ],
    "Algebraic expressions": [
      "Group like terms: (5a − 2a) + (3b + b) = 3a + 4b.",
      "Distribute 2 to each term: 2 × 3x = 6x and 2 × (−5) = −10. Result: 6x − 10.",
      "The HCF of 8 and 12 is 4. Factor 4 out of each term: 8y + 12 = 4(2y + 3)."
    ],
    "Equations & inequalities": [
      "Subtract 3 from both sides: 4y = 16. Divide both sides by 4: y = 4. Check: 4(4) + 3 = 19.",
      "Subtract 2 from both sides: x + 2 − 2 < 7 − 2. Therefore x < 5.",
      "Divide both sides by 5: 5a ÷ 5 = 35 ÷ 5, so a = 7. Check: 5 × 7 = 35."
    ],
    "Angles & polygons": [
      "A hexagon has n = 6 sides. Interior angle sum = (n − 2) × 180° = (6 − 2) × 180° = 720°.",
      "A quadrilateral’s angles total 360°. Known total = 90° + 80° + 110° = 280°. Missing angle = 360° − 280° = 80°.",
      "Angles on a straight line total 180°. Missing angle = 180° − 127° = 53°."
    ],
    "Geometric constructions": [
      "An angle bisector makes two equal angles. Calculate 80° ÷ 2 = 40° for each part.",
      "Triangle inequality: the two shorter sides must add to more than the longest side. Here 2 + 3 = 5, and 5 < 6, so no triangle is possible.",
      "Place the centre mark over the vertex, align one arm with zero, and read the other arm on the protractor: the instrument is a protractor."
    ],
    "Scale drawing": [
      "Scale: 1 cm represents 4 km. For 3 cm, calculate 3 × 4 = 12 km.",
      "At 1:100, 1 cm on the plan represents 100 cm in real life. So 5 × 100 = 500 cm = 5 m.",
      "Each centimetre represents 3 m. Drawing length = 12 ÷ 3 = 4 cm."
    ],
    "Perimeter, area & volume": [
      "Triangle area = 1/2 × base × perpendicular height = 1/2 × 10 × 6 = 30 cm².",
      "Cuboid volume = length × width × height = 7 × 2 × 3 = 42 m³.",
      "Parallelogram area = base × perpendicular height = 8 × 5 = 40 cm²."
    ],
    "Statistics & data": [
      "First order the values: 2, 3, 5, 7, 8. With five values, the middle (third) value is the median: 5.",
      "Add the values: 4 + 6 + 8 + 10 = 28. Divide by the four values: mean = 28 ÷ 4 = 7.",
      "Count occurrences: 2, 4 and 5 appear once; 3 appears three times. The mode is 3."
    ],
    Probability: [
      "A standard die’s possible results are 1, 2, 3, 4, 5 and 6. There are no favourable outcomes, so P(7) = 0/6 = 0.",
      "Even results are 2, 4 and 6: 3 favourable outcomes out of 6. Probability = 3/6 = 1/2.",
      "There are 3 + 2 = 5 balls altogether and 2 are blue. P(blue) = 2/5."
    ],
    "Commercial arithmetic": [
      "Loss = cost price − selling price = ₦800 − ₦700 = ₦100.",
      "Simple interest I = P × R × T ÷ 100. Substitute: ₦2,000 × 10 × 1 ÷ 100 = ₦200.",
      "Discount = 20% of ₦1,000 = 0.20 × ₦1,000 = ₦200. Sale price = ₦1,000 − ₦200 = ₦800."
    ]
  }
};

const progressKey = "mathematics-made-easy-progress-v1";
let currentClass = "JSS1";
let selectedIndex = 0;
let completedTopics = loadProgress();

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(progressKey) || "{}");
    return {
      JSS1: Array.isArray(saved.JSS1) ? saved.JSS1.filter(Number.isInteger) : [],
      JSS2: Array.isArray(saved.JSS2) ? saved.JSS2.filter(Number.isInteger) : []
    };
  } catch (error) {
    console.warn("Learning progress could not be loaded from this browser.", error);
    return { JSS1: [], JSS2: [] };
  }
}

function saveProgress() {
  try {
    localStorage.setItem(progressKey, JSON.stringify(completedTopics));
  } catch (error) {
    console.warn("Learning progress could not be saved in this browser.", error);
  }
}

function getVisibleTopics() {
  const query = document.getElementById("search-input").value.trim().toLocaleLowerCase();
  return syllabus[currentClass].map((topic, index) => ({ topic, index }))
    .filter(({ topic }) => `${topic.title} ${topic.summary}`.toLocaleLowerCase().includes(query));
}

function updateStats() {
  const topics = syllabus[currentClass];
  const visited = new Set(completedTopics[currentClass]);
  const percent = Math.round(visited.size / topics.length * 100);
  document.getElementById("progress-value").textContent = `${percent}%`;
  document.getElementById("progress-bar").style.width = `${percent}%`;
  document.getElementById("stat-topics").textContent = topics.length;
  document.getElementById("stat-questions").textContent = topics.reduce((sum, topic) => sum + topic.questions.length, 0);
  document.getElementById("topic-count").textContent = `${topics.length} TOPICS`;
  document.getElementById("crumb-class").textContent = currentClass.replace("JSS", "JSS ");
  document.getElementById("syllabus-heading").textContent = `Your ${currentClass.replace("JSS", "JSS ")} topics`;
}

function renderNavigation() {
  const query = document.getElementById("search-input").value.trim().toLocaleLowerCase();
  const nav = document.getElementById("topic-nav");
  nav.innerHTML = "";
  syllabus[currentClass].forEach((topic, index) => {
    if (!`${topic.title} ${topic.summary}`.toLocaleLowerCase().includes(query)) return;
    const button = document.createElement("button");
    button.className = `nav-topic${index === selectedIndex ? " is-active" : ""}`;
    button.type = "button";
    button.innerHTML = `<span class="nav-number">${String(index + 1).padStart(2, "0")}</span><span class="nav-topic-title"></span>`;
    button.querySelector(".nav-topic-title").textContent = topic.title;
    button.addEventListener("click", () => selectTopic(index, true));
    nav.appendChild(button);
  });
}

function renderCards() {
  const grid = document.getElementById("topic-grid");
  const visibleTopics = getVisibleTopics();
  grid.innerHTML = "";
  document.getElementById("empty-state").hidden = visibleTopics.length !== 0;
  grid.hidden = visibleTopics.length === 0;
  visibleTopics.forEach(({ topic, index }) => {
    const card = document.createElement("article");
    const isDone = completedTopics[currentClass].includes(index);
    card.className = `topic-card${index === selectedIndex ? " is-selected" : ""}`;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open ${topic.title}`);
    card.innerHTML = `<div class="topic-card-top"><span class="topic-icon"></span><span class="topic-arrow">↗</span></div><h3></h3><p></p><div class="topic-card-foot"><span>${topic.questions.length} practice questions</span><span class="${isDone ? "done-label" : ""}">${isDone ? "✓ EXPLORED" : "OPEN TOPIC"}</span></div>`;
    card.querySelector(".topic-icon").textContent = topic.icon;
    card.querySelector("h3").textContent = topic.title;
    card.querySelector("p").textContent = topic.summary;
    card.addEventListener("click", () => selectTopic(index, true));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectTopic(index, true);
      }
    });
    grid.appendChild(card);
  });
}

function renderLesson() {
  const topic = syllabus[currentClass][selectedIndex];
  const lesson = document.getElementById("lesson-panel");
  const questions = topic.questions.map(([question, answer], index) => `
    <div class="question-item">
      <p class="question-text"><span class="question-number">Q${index + 1}.</span> ${question}</p>
      <button class="answer-toggle" type="button" aria-expanded="false">Show workings +</button>
      <div class="answer-content" hidden><strong>Step-by-step working</strong><p>${practiceWorkings[currentClass][topic.title][index]}</p><strong>Answer</strong><p>${answer}</p></div>
    </div>`).join("");
  const done = completedTopics[currentClass].includes(selectedIndex);
  lesson.innerHTML = `
    <article class="lesson-card">
      <div class="lesson-head">
        <div class="lesson-kicker">${currentClass.replace("JSS", "JSS ")} · TOPIC ${String(selectedIndex + 1).padStart(2, "0")}</div>
        <h2>${topic.title}</h2><p>${topic.summary}</p>
      </div>
      <div class="lesson-body">
        <p class="learn-title">WHAT YOU’LL LEARN</p>
        <ul class="objective-list">${topic.objectives.map(objective => `<li>${objective}</li>`).join("")}</ul>
        <div class="example-box"><div class="example-label">LET’S WORK IT OUT</div><div class="example-question">${topic.example[0]}</div><div class="example-answer">${topic.example[1]}</div></div>
        <section class="question-section" aria-label="Practice questions">
          <div class="practice-heading"><strong>Give it a try</strong><span>${topic.questions.length} QUESTIONS</span></div>
          ${questions}
        </section>
        <button class="mark-complete${done ? " is-done" : ""}" type="button">${done ? "✓ Topic explored" : "✓  Mark topic as explored"}</button>
      </div>
    </article>`;
  lesson.querySelectorAll(".answer-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isExpanded));
      answer.hidden = isExpanded;
      button.textContent = isExpanded ? "Show workings +" : "Hide workings −";
    });
  });
  lesson.querySelector(".mark-complete").addEventListener("click", () => {
    if (!completedTopics[currentClass].includes(selectedIndex)) {
      completedTopics[currentClass].push(selectedIndex);
      saveProgress();
    }
    updateStats();
    renderCards();
    renderLesson();
  });
}

function selectTopic(index, scrollToLesson) {
  selectedIndex = index;
  if (!completedTopics[currentClass].includes(index)) completedTopics[currentClass].push(index);
  saveProgress();
  updateStats();
  renderNavigation();
  renderCards();
  renderLesson();
  if (scrollToLesson && window.matchMedia("(max-width: 620px)").matches) {
    document.getElementById("lesson-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setClass(nextClass) {
  currentClass = nextClass;
  selectedIndex = 0;
  document.querySelectorAll(".class-button").forEach(button => {
    const active = button.dataset.class === currentClass;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  updateStats();
  renderNavigation();
  renderCards();
  renderLesson();
}

document.querySelectorAll(".class-button").forEach(button => {
  button.setAttribute("aria-pressed", String(button.dataset.class === currentClass));
  button.addEventListener("click", () => setClass(button.dataset.class));
});
document.getElementById("search-input").addEventListener("input", () => {
  renderNavigation();
  renderCards();
});
document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    document.getElementById("search-input").focus();
  }
  if (event.key === "Escape") {
    document.getElementById("search-input").blur();
    document.getElementById("sidebar").classList.remove("is-open");
  }
});
document.getElementById("menu-button").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("is-open");
});
document.querySelector(".brand").addEventListener("click", event => {
  event.preventDefault();
  document.getElementById("search-input").value = "";
  setClass("JSS1");
  document.getElementById("sidebar").classList.remove("is-open");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.getElementById("today-label").textContent = new Intl.DateTimeFormat("en", { weekday: "short", month: "short", day: "numeric" }).format(new Date());
updateStats();
renderNavigation();
renderCards();
renderLesson();
