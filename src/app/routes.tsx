import { createBrowserRouter, Navigate } from 'react-router';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { CoachCode } from './pages/CoachCode';
import { Dashboard } from './pages/Dashboard';
import { AthleteLayout } from './layouts/AthleteLayout';
import { CoachLayout } from './layouts/CoachLayout';
import { AthleteHome } from './pages/athlete/AthleteHome';
import { AthleteMessages } from './pages/athlete/AthleteMessages';
import { AthleteProfile } from './pages/athlete/AthleteProfile';
import { AthleteWorkoutDetail } from './pages/athlete/AthleteWorkoutDetail';
import { Goals } from './pages/athlete/Goals';
import { Documents } from './pages/athlete/Documents';
import { PersonalInfo } from './pages/athlete/PersonalInfo';
import { DevContact } from './pages/athlete/DevContact';
import { AthleteEditProfile } from './pages/athlete/AthleteEditProfile';
import { AthleteNotificationSettings } from './pages/athlete/AthleteNotificationSettings';
import { AthleteHelpSupport } from './pages/athlete/AthleteHelpSupport';
import { AthleteEmailSupport } from './pages/athlete/EmailSupport';
import { EditGoal as AthleteEditGoal } from './pages/athlete/EditGoal';
import { CoachHome } from './pages/coach/CoachHome';
import { CoachLibrary } from './pages/coach/CoachLibrary';
import { CoachInbox } from './pages/coach/CoachInbox';
import { CoachProfile } from './pages/coach/CoachProfile';
import { AthleteDetail } from './pages/coach/AthleteDetail';
import { WorkoutDetail } from './pages/coach/WorkoutDetail';
import { ExerciseDetail } from './pages/coach/ExerciseDetail';
import { CreateExercise } from './pages/coach/CreateExercise';
import { CoachEditProfile } from './pages/coach/CoachEditProfile';
import { NotificationSettings } from './pages/coach/NotificationSettings';
import { HelpSupport } from './pages/coach/HelpSupport';
import { CoachEmailSupport } from './pages/coach/EmailSupport';
import { Messages } from './pages/Messages';
import { AthleteGoals } from './pages/coach/AthleteGoals';
import { AthleteDocuments } from './pages/coach/AthleteDocuments';
import { EditGoal as CoachEditGoal } from './pages/coach/EditGoal';
import { AthleteWorkouts } from './pages/coach/AthleteWorkouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/coach-code',
    element: <CoachCode />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/athlete',
    element: <AthleteLayout />,
    children: [
      {
        path: 'home',
        element: <AthleteHome />
      },
      {
        path: 'workout/:workoutId',
        element: <AthleteWorkoutDetail />
      },
      {
        path: 'messages',
        element: <AthleteMessages />
      },
      {
        path: 'messages/:chatId',
        element: <Messages />
      },
      {
        path: 'profile',
        element: <AthleteProfile />
      },
      {
        path: 'edit-profile',
        element: <AthleteEditProfile />
      },
      {
        path: 'notification-settings',
        element: <AthleteNotificationSettings />
      },
      {
        path: 'help-support',
        element: <AthleteHelpSupport />
      },
      {
        path: 'email-support',
        element: <AthleteEmailSupport />
      },
      {
        path: 'goals',
        element: <Goals />
      },
      {
        path: 'goal/:goalId/edit',
        element: <AthleteEditGoal />
      },
      {
        path: 'documents',
        element: <Documents />
      },
      {
        path: 'personal-info',
        element: <PersonalInfo />
      },
      {
        path: 'dev-contact',
        element: <DevContact />
      }
    ]
  },
  {
    path: '/coach',
    element: <CoachLayout />,
    children: [
      {
        path: 'home',
        element: <CoachHome />
      },
      {
        path: 'athlete/:athleteId',
        element: <AthleteDetail />
      },
      {
        path: 'athlete/:athleteId/goals',
        element: <AthleteGoals />
      },
      {
        path: 'athlete/:athleteId/documents',
        element: <AthleteDocuments />
      },
      {
        path: 'athlete/:athleteId/workouts',
        element: <AthleteWorkouts />
      },
      {
        path: 'athlete/:athleteId/goal/:goalId/edit',
        element: <CoachEditGoal />
      },
      {
        path: 'workout/:workoutId',
        element: <WorkoutDetail />
      },
      {
        path: 'exercise/:exerciseId',
        element: <ExerciseDetail />
      },
      {
        path: 'create-exercise',
        element: <CreateExercise />
      },
      {
        path: 'library',
        element: <CoachLibrary />
      },
      {
        path: 'inbox',
        element: <CoachInbox />
      },
      {
        path: 'inbox/:chatId',
        element: <Messages />
      },
      {
        path: 'profile',
        element: <CoachProfile />
      },
      {
        path: 'edit-profile',
        element: <CoachEditProfile />
      },
      {
        path: 'notification-settings',
        element: <NotificationSettings />
      },
      {
        path: 'help-support',
        element: <HelpSupport />
      },
      {
        path: 'email-support',
        element: <CoachEmailSupport />
      }
    ]
  }
]);