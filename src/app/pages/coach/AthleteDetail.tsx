import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Plus, Calendar, Upload, FileText, Download, Trash2, ChevronRight, Target } from 'lucide-react';
import { useState } from 'react';
import logo from 'figma:asset/6715fa8a90369e65d79802402e0679daa2d685be.png';

interface Document {
  id: number;
  name: string;
  date: string;
  size: string;
}

interface Goal {
  id: number;
  title: string;
  target: string;
  deadline: string;
  completed: boolean;
}

// Mock athlete data
const mockAthleteData: Record<string, any> = {
  '1': {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 28,
    gender: 'Male',
    weight: '185 lbs',
    height: '6\'0"',
    workoutsCompleted: 47,
    workoutCompletionRate: 85,
    streak: 12,
    lastWorkout: 'Feb 4, 2026',
    schedule: [
      { date: 'Feb 1', day: 'Mon', workout: 'Upper Body Strength', completed: true },
      { date: 'Feb 2', day: 'Tue', workout: 'Lower Body Power', completed: true },
      { date: 'Feb 3', day: 'Wed', workout: 'Core & Conditioning', completed: true },
      { date: 'Feb 4', day: 'Thu', workout: 'Active Recovery', completed: true },
      { date: 'Feb 5', day: 'Fri', workout: null, completed: false },
      { date: 'Feb 6', day: 'Sat', workout: 'Full Body HIIT', completed: false },
      { date: 'Feb 7', day: 'Sun', workout: 'Rest Day', completed: false }
    ],
    documents: [
      { id: 1, name: 'Medical Report.pdf', date: 'Jan 15, 2026', size: '2.5 MB' },
      { id: 2, name: 'Nutrition Plan.docx', date: 'Jan 20, 2026', size: '1.2 MB' }
    ],
    goals: [
      { id: 1, title: 'Increase bench press to 225 lbs', target: '225 lbs', deadline: '3 months', completed: false },
      { id: 2, title: 'Reduce body fat to 12%', target: '12%', deadline: '6 months', completed: false }
    ]
  },
  '2': {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    age: 32,
    gender: 'Female',
    weight: '145 lbs',
    height: '5\'6"',
    workoutsCompleted: 38,
    workoutCompletionRate: 72,
    streak: 8,
    lastWorkout: 'Feb 3, 2026',
    schedule: [
      { date: 'Feb 1', day: 'Mon', workout: 'Olympic Lifting', completed: true },
      { date: 'Feb 2', day: 'Tue', workout: 'Rest Day', completed: true },
      { date: 'Feb 3', day: 'Wed', workout: 'Upper Body Strength', completed: true },
      { date: 'Feb 4', day: 'Thu', workout: null, completed: false },
      { date: 'Feb 5', day: 'Fri', workout: 'Lower Body Strength', completed: false },
      { date: 'Feb 6', day: 'Sat', workout: 'Core & Cardio', completed: false },
      { date: 'Feb 7', day: 'Sun', workout: null, completed: false }
    ],
    documents: [
      { id: 3, name: 'Medical Report.pdf', date: 'Jan 15, 2026', size: '2.5 MB' },
      { id: 4, name: 'Nutrition Plan.docx', date: 'Jan 20, 2026', size: '1.2 MB' }
    ],
    goals: [
      { id: 3, title: 'Master Olympic lifts technique', target: 'Form check', deadline: '2 months', completed: false }
    ]
  },
  '3': {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.j@example.com',
    age: 25,
    gender: 'Male',
    weight: '205 lbs',
    height: '6\'3"',
    workoutsCompleted: 62,
    workoutCompletionRate: 90,
    streak: 15,
    lastWorkout: 'Feb 4, 2026',
    schedule: [
      { date: 'Feb 1', day: 'Mon', workout: 'Heavy Squats', completed: true },
      { date: 'Feb 2', day: 'Tue', workout: 'Bench Press Day', completed: true },
      { date: 'Feb 3', day: 'Wed', workout: 'Deadlift Training', completed: true },
      { date: 'Feb 4', day: 'Thu', workout: 'Accessory Work', completed: true },
      { date: 'Feb 5', day: 'Fri', workout: 'Olympic Lifts', completed: false },
      { date: 'Feb 6', day: 'Sat', workout: 'Conditioning', completed: false },
      { date: 'Feb 7', day: 'Sun', workout: 'Mobility & Recovery', completed: false }
    ],
    documents: [
      { id: 5, name: 'Medical Report.pdf', date: 'Jan 15, 2026', size: '2.5 MB' },
      { id: 6, name: 'Nutrition Plan.docx', date: 'Jan 20, 2026', size: '1.2 MB' }
    ],
    goals: [
      { id: 4, title: 'Squat 500 lbs', target: '500 lbs', deadline: '4 months', completed: false },
      { id: 5, title: 'Deadlift 600 lbs', target: '600 lbs', deadline: '5 months', completed: false }
    ]
  },
  '4': {
    id: 4,
    name: 'Sarah Williams',
    email: 'sarah.w@example.com',
    age: 29,
    gender: 'Female',
    weight: '135 lbs',
    height: '5\'4"',
    workoutsCompleted: 29,
    workoutCompletionRate: 65,
    streak: 5,
    lastWorkout: 'Feb 2, 2026',
    schedule: [
      { date: 'Feb 1', day: 'Mon', workout: 'Full Body Strength', completed: true },
      { date: 'Feb 2', day: 'Tue', workout: 'HIIT Session', completed: true },
      { date: 'Feb 3', day: 'Wed', workout: null, completed: false },
      { date: 'Feb 4', day: 'Thu', workout: 'Lower Body Focus', completed: false },
      { date: 'Feb 5', day: 'Fri', workout: null, completed: false },
      { date: 'Feb 6', day: 'Sat', workout: 'Upper Body & Core', completed: false },
      { date: 'Feb 7', day: 'Sun', workout: 'Rest Day', completed: false }
    ],
    documents: [
      { id: 7, name: 'Medical Report.pdf', date: 'Jan 15, 2026', size: '2.5 MB' },
      { id: 8, name: 'Nutrition Plan.docx', date: 'Jan 20, 2026', size: '1.2 MB' }
    ],
    goals: [
      { id: 6, title: 'Lose 10 pounds', target: '125 lbs', deadline: '3 months', completed: false }
    ]
  }
};

export function AthleteDetail() {
  const { athleteId } = useParams();
  const navigate = useNavigate();
  const athlete = athleteId ? mockAthleteData[athleteId] : null;

  if (!athlete) {
    return (
      <div className="min-h-full bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Athlete not found</p>
      </div>
    );
  }

  const handleWorkoutClick = (day: any) => {
    if (day.workout) {
      navigate(`/coach/workout/${day.date}`, {
        state: {
          workoutName: day.workout,
          workoutDate: day.date,
          workoutDay: day.day,
          athleteId: athleteId
        }
      });
    }
  };

  const handleAddWorkout = (day: any, e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/coach/workout/${day.date}`, {
      state: {
        workoutName: 'New Workout',
        workoutDate: day.date,
        workoutDay: day.day,
        athleteId: athleteId
      }
    });
  };

  const handleUploadDocument = () => {
    // Handle document upload logic here
  };

  const handleDownloadDocument = (document: Document) => {
    // Handle document download logic here
  };

  const handleDeleteDocument = (document: Document) => {
    // Handle document delete logic here
  };

  return (
    <div className="min-h-full bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-black text-white px-6 py-8">
        <button
          onClick={() => navigate('/coach/home')}
          className="text-white mb-4 hover:text-[#FFD000] transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src={logo} alt="SE Fitness" className="h-10 w-auto mb-3" />
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#FFD000] rounded-full flex items-center justify-center text-black text-xl">
            {athlete.name.split(' ').map((n: string) => n[0]).join('')}
          </div>
          <div>
            <h1 className="text-xl mb-1 font-semibold">{athlete.name}</h1>
            <p className="text-gray-400 text-sm">{athlete.email}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 -mt-4 mb-6">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600 mb-1 whitespace-nowrap">Workouts Completed</div>
              <div>{athlete.workoutsCompleted}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1 whitespace-nowrap">Completion Rate</div>
              <div>{athlete.workoutCompletionRate}%</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1 whitespace-nowrap">Current Streak</div>
              <div className="text-[#FFD000]">{athlete.streak} days</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1 whitespace-nowrap">Last Workout</div>
              <div>{athlete.lastWorkout}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="px-6 mb-6">
        <h3 className="text-lg mb-3 font-semibold">Personal Information</h3>
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600 mb-1">Age</div>
              <div className="text-black">{athlete.age} years</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Gender</div>
              <div className="text-black">{athlete.gender}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Weight</div>
              <div className="text-black">{athlete.weight}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Height</div>
              <div className="text-black">{athlete.height}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">This Week's Schedule</h3>
          <button className="text-[#FFD000] hover:underline">View All</button>
        </div>
        <div className="space-y-2">
          {athlete.schedule.map((day: any, idx: number) => (
            <button
              key={idx}
              onClick={() => handleWorkoutClick(day)}
              disabled={!day.workout}
              className={`w-full bg-white rounded-xl p-4 shadow-sm text-left ${
                day.completed ? 'opacity-60' : ''
              } ${day.workout ? 'hover:shadow-md transition-shadow cursor-pointer' : 'cursor-default'}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-center min-w-[60px]">
                    <div className="text-xs text-gray-500">{day.day}</div>
                    <div>{day.date}</div>
                  </div>
                  <div className="flex-1">
                    {day.workout ? (
                      <>
                        <div className="mb-1">{day.workout}</div>
                        {day.completed && (
                          <div className="text-sm text-green-600">✓ Completed</div>
                        )}
                      </>
                    ) : (
                      <div className="text-gray-400 italic">No workout assigned</div>
                    )}
                  </div>
                </div>
                {!day.completed && !day.workout && (
                  <button
                    onClick={(e) => handleAddWorkout(day, e)}
                    className="text-[#FFD000] hover:bg-[#FFD000]/10 p-2 rounded-lg transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Documents */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Documents</h3>
          <button 
            className="flex items-center gap-1 text-[#FFD000] hover:underline text-sm" 
            onClick={handleUploadDocument}
          >
            <Upload className="w-4 h-4" />
            Upload
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {athlete.documents.map((document: Document, idx: number) => (
            <div
              key={document.id}
              className={`w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors ${
                idx !== athlete.documents.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-gray-500" />
                </div>
                <div className="flex-1">
                  <div className="mb-0.5">{document.name}</div>
                  <div className="text-sm text-gray-500">
                    {document.date} • {document.size}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="text-gray-400 hover:text-[#FFD000] p-2 rounded-lg transition-colors"
                  onClick={() => handleDownloadDocument(document)}
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  className="text-gray-400 hover:text-red-500 p-2 rounded-lg transition-colors"
                  onClick={() => handleDeleteDocument(document)}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Goals */}
      {athlete.goals && athlete.goals.length > 0 && (
        <div className="px-6 mb-6">
          <h3 className="font-semibold mb-3">Athlete Goals</h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {athlete.goals.map((goal: Goal, idx: number) => (
              <div
                key={goal.id}
                className={`w-full p-4 text-left ${
                  idx !== athlete.goals.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#FFD000]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-[#FFD000]" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">{goal.title}</div>
                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                      <div>
                        <span className="text-xs text-gray-500">Target: </span>
                        {goal.target}
                      </div>
                      <div>
                        <span className="text-xs text-gray-500">Deadline: </span>
                        {goal.deadline}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="px-6">
        <button className="w-full bg-[#FFD000] text-black rounded-xl p-4 flex items-center justify-center gap-3 hover:bg-[#FFD000]/90 transition-colors shadow-sm font-medium">
          <Plus className="w-5 h-5" />
          <span>Assign New Workout</span>
        </button>
      </div>
    </div>
  );
}