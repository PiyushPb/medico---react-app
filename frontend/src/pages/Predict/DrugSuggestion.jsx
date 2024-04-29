import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const DrugSuggestion = () => {
  const [open, setOpen] = useState(0);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [predictionData, setPredictionData] = useState(null);
  const [loading, setLoading] = useState(false);

  const symptoms_dict = {
    itching: 0,
    skin_rash: 1,
    nodal_skin_eruptions: 2,
    continuous_sneezing: 3,
    shivering: 4,
    chills: 5,
    joint_pain: 6,
    stomach_pain: 7,
    acidity: 8,
    ulcers_on_tongue: 9,
    muscle_wasting: 10,
    vomiting: 11,
    burning_micturition: 12,
    "spotting_ urination": 13,
    fatigue: 14,
    weight_gain: 15,
    anxiety: 16,
    cold_hands_and_feets: 17,
    mood_swings: 18,
    weight_loss: 19,
    restlessness: 20,
    lethargy: 21,
    patches_in_throat: 22,
    irregular_sugar_level: 23,
    cough: 24,
    high_fever: 25,
    sunken_eyes: 26,
    breathlessness: 27,
    sweating: 28,
    dehydration: 29,
    indigestion: 30,
    headache: 31,
    yellowish_skin: 32,
    dark_urine: 33,
    nausea: 34,
    loss_of_appetite: 35,
    pain_behind_the_eyes: 36,
    back_pain: 37,
    constipation: 38,
    abdominal_pain: 39,
    diarrhoea: 40,
    mild_fever: 41,
    yellow_urine: 42,
    yellowing_of_eyes: 43,
    acute_liver_failure: 44,
    fluid_overload: 45,
    swelling_of_stomach: 46,
    swelled_lymph_nodes: 47,
    malaise: 48,
    blurred_and_distorted_vision: 49,
    phlegm: 50,
    throat_irritation: 51,
    redness_of_eyes: 52,
    sinus_pressure: 53,
    runny_nose: 54,
    congestion: 55,
    chest_pain: 56,
    weakness_in_limbs: 57,
    fast_heart_rate: 58,
    pain_during_bowel_movements: 59,
    pain_in_anal_region: 60,
    bloody_stool: 61,
    irritation_in_anus: 62,
    neck_pain: 63,
    dizziness: 64,
    cramps: 65,
    bruising: 66,
    obesity: 67,
    swollen_legs: 68,
    swollen_blood_vessels: 69,
    puffy_face_and_eyes: 70,
    enlarged_thyroid: 71,
    brittle_nails: 72,
    swollen_extremeties: 73,
    excessive_hunger: 74,
    extra_marital_contacts: 75,
    drying_and_tingling_lips: 76,
    slurred_speech: 77,
    knee_pain: 78,
    hip_joint_pain: 79,
    muscle_weakness: 80,
    stiff_neck: 81,
    swelling_joints: 82,
    movement_stiffness: 83,
    spinning_movements: 84,
    loss_of_balance: 85,
    unsteadiness: 86,
    weakness_of_one_body_side: 87,
    loss_of_smell: 88,
    bladder_discomfort: 89,
    "foul_smell_of urine": 90,
    continuous_feel_of_urine: 91,
    passage_of_gases: 92,
    internal_itching: 93,
    "toxic_look_(typhos)": 94,
    depression: 95,
    irritability: 96,
    muscle_pain: 97,
    altered_sensorium: 98,
    red_spots_over_body: 99,
    belly_pain: 100,
    abnormal_menstruation: 101,
    "dischromic _patches": 102,
    watering_from_eyes: 103,
    increased_appetite: 104,
    polyuria: 105,
    family_history: 106,
    mucoid_sputum: 107,
    rusty_sputum: 108,
    lack_of_concentration: 109,
    visual_disturbances: 110,
    receiving_blood_transfusion: 111,
    receiving_unsterile_injections: 112,
    coma: 113,
    stomach_bleeding: 114,
    distention_of_abdomen: 115,
    history_of_alcohol_consumption: 116,
    "fluid_overload.1": 117,
    blood_in_sputum: 118,
    prominent_veins_on_calf: 119,
    palpitations: 120,
    painful_walking: 121,
    pus_filled_pimples: 122,
    blackheads: 123,
    scurring: 124,
    skin_peeling: 125,
    silver_like_dusting: 126,
    small_dents_in_nails: 127,
    inflammatory_nails: 128,
    blister: 129,
    red_sore_around_nose: 130,
    yellow_crust_ooze: 131,
  };

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedSymptoms([...selectedSymptoms, id]);
    } else {
      setSelectedSymptoms(selectedSymptoms.filter((symptom) => symptom !== id));
    }
  };

  const filteredSymptoms = Object.entries(symptoms_dict)
    .filter(([symptom]) =>
      symptom.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort(([symptomA], [symptomB]) => {
      const isSelectedA = selectedSymptoms.includes(symptomA);
      const isSelectedB = selectedSymptoms.includes(symptomB);
      if (isSelectedA && isSelectedB) return 0;
      if (isSelectedA) return -1;
      if (isSelectedB) return 1;
      return 0;
    });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://medicobhbackendapi.onrender.com/api/v1/symptomsPrediction",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ symptoms: selectedSymptoms.join(", ") }),
        }
      );
      const data = await response.json();
      setPredictionData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1 className="text-xl font-bold mt-5">Drug Suggestion</h1>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Search symptoms"
          className="form__input"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="flex flex-wrap justify-start items-center gap-2">
          {filteredSymptoms.map(([symptom, index]) => (
            <div
              key={symptom}
              className="mt-5 flex gap-2 border w-fit p-3 border-gray-500 rounded-md"
            >
              <input
                type="checkbox"
                id={symptom}
                checked={selectedSymptoms.includes(symptom)}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={symptom}>{symptom}</label>
            </div>
          ))}
        </div>
        <button
          className="btn mt-5"
          onClick={handleSubmit}
          disabled={!selectedSymptoms.length || loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
        <div className="mt-5">
          {predictionData && (
            <>
              <p className="text-xl font-bold my-3">
                Predicted Disease: {predictionData.predicted_disease}
              </p>
              {/* ---------------------------------------------- */}
              <Accordion
                open={open === 1}
                className="mb-2 rounded-lg border border-blue-gray-100 px-4"
              >
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className={`border-b-0 transition-colors ${
                    open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
                  }`}
                >
                  Description of disease
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                  {predictionData.description}
                </AccordionBody>
              </Accordion>
              {/* ---------------------------------------------- */}
              <Accordion
                open={open === 2}
                className="mb-2 rounded-lg border border-blue-gray-100 px-4"
              >
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className={`border-b-0 transition-colors ${
                    open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
                  }`}
                >
                  Recommended diet
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                  <ul>
                    {predictionData.diet[0]
                      .replace(/'/g, '"')
                      .slice(1, -1)
                      .split(",")
                      .map((item, index) => (
                        <li key={index}>{item.trim()}</li>
                      ))}
                  </ul>
                </AccordionBody>
              </Accordion>

              {/* ---------------------------------------------- */}
              <Accordion
                open={open === 3}
                className="mb-2 rounded-lg border border-blue-gray-100 px-4"
              >
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className={`border-b-0 transition-colors ${
                    open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
                  }`}
                >
                  Recommended medications
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                  <ul>
                    {predictionData.medications[0]
                      .replace(/'/g, '"')
                      .slice(1, -1)
                      .split(",")
                      .map((item, index) => {
                        return <li key={index}>{item.trim()}</li>;
                      })}
                  </ul>
                </AccordionBody>
              </Accordion>
              {/* ---------------------------------------------- */}
              <Accordion
                open={open === 4}
                className="mb-2 rounded-lg border border-blue-gray-100 px-4"
              >
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className={`border-b-0 transition-colors ${
                    open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
                  }`}
                >
                  Precautions to be followed
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                  {predictionData.precautions[0].map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </AccordionBody>
              </Accordion>
              {/* ---------------------------------------------- */}
              <Accordion
                open={open === 5}
                className="mb-2 rounded-lg border border-blue-gray-100 px-4"
              >
                <AccordionHeader
                  onClick={() => handleOpen(5)}
                  className={`border-b-0 transition-colors ${
                    open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
                  }`}
                >
                  Workout to be followed
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                  {predictionData.workout.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </AccordionBody>
              </Accordion>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrugSuggestion;
