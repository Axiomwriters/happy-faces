// Mock data for student dashboard

export const mockStudent = {
    name: 'John Doe',
    id: 'STU-2024-001',
    email: 'john.doe@happyfaces.org',
    avatar: null,
    enrollmentDate: '2024-01-15',
    phone: '+254 712 345 678'
};

export const mockAnnouncements = [
    {
        id: 1,
        type: 'urgent',
        title: 'Fee Payment Deadline Extended',
        message: 'The deadline for semester fees has been extended to December 20th.',
        details: 'Due to numerous requests, we have decided to extend the payment deadline by one week. Please ensure all payments are completed by December 20th to avoid late fees. Contact the finance office for any payment-related queries.',
        date: '2 hours ago',
        author: 'Finance Office',
        link: '/student/payments'
    },
    {
        id: 2,
        type: 'info',
        title: 'New Workshop Starting Next Week',
        message: 'Join our advanced carpentry workshop starting Monday, Dec 15th.',
        details: 'This workshop will cover advanced joinery techniques, furniture design, and project management. Limited seats available. Registration closes this Friday.',
        date: '1 day ago',
        author: 'Training Coordinator',
        link: '/student/courses'
    },
    {
        id: 3,
        type: 'reminder',
        title: 'Class Assessment This Friday',
        message: 'Electrical Installation class assessment scheduled for Friday at 10:00 AM.',
        details: 'Topics covered: Safety protocols, Circuit design, Wiring techniques. Duration: 2 hours. Please bring your tools and materials.',
        date: '2 days ago',
        author: 'Instructor James'
    },
    {
        id: 4,
        type: 'info',
        title: 'Library Hours Extended',
        message: 'The resource library will now be open until 8:00 PM on weekdays.',
        date: '3 days ago',
        author: 'Administration'
    }
];

export const mockCourses = [
    {
        id: 1,
        title: 'Carpentry Basics',
        progress: 80,
        status: 'In Progress',
        nextClass: 'Tomorrow, 9:00 AM',
        image: null,
        currentModule: 'Module 5: Advanced Joinery',
        totalModules: 8,
        trainer: {
            name: 'Peter Kamau',
            email: 'p.kamau@happyfaces.org',
            phone: '+254 722 111 222'
        },
        tasks: [
            { id: 1, title: 'Complete joint exercise', completed: true },
            { id: 2, title: 'Submit project photos', completed: false },
            { id: 3, title: 'Review safety guidelines', completed: true }
        ]
    },
    {
        id: 2,
        title: 'Electrical Installation',
        progress: 45,
        status: 'In Progress',
        nextClass: 'Monday, 10:00 AM',
        image: null,
        currentModule: 'Module 3: Circuit Design',
        totalModules: 10,
        trainer: {
            name: 'James Odhiambo',
            email: 'j.odhiambo@happyfaces.org',
            phone: '+254 733 222 333'
        },
        tasks: [
            { id: 1, title: 'Complete circuit diagram', completed: false },
            { id: 2, title: 'Study safety protocols', completed: true },
            { id: 3, title: 'Practical assessment prep', completed: false }
        ]
    },
    {
        id: 3,
        title: 'Tailoring Fundamentals',
        progress: 100,
        status: 'Completed',
        nextClass: 'Course Completed',
        image: null,
        currentModule: 'Completed',
        totalModules: 6,
        trainer: {
            name: 'Mary Wanjiku',
            email: 'm.wanjiku@happyfaces.org',
            phone: '+254 744 333 444'
        },
        tasks: []
    }
];

export const mockStats = [
    {
        label: 'Enrolled Courses',
        value: '3',
        change: '+1 this month',
        trend: 'up'
    },
    {
        label: 'In Progress',
        value: '2',
        change: 'On track',
        trend: 'neutral'
    },
    {
        label: 'Completed',
        value: '1',
        change: '+1 this month',
        trend: 'up'
    },
    {
        label: 'Overall Progress',
        value: '65%',
        change: '+15% this month',
        trend: 'up'
    }
];

export const mockPerformance = {
    modules: [
        { name: 'Carpentry - Module 1', score: 92, maxScore: 100, status: 'passed' },
        { name: 'Carpentry - Module 2', score: 88, maxScore: 100, status: 'passed' },
        { name: 'Carpentry - Module 3', score: 95, maxScore: 100, status: 'passed' },
        { name: 'Carpentry - Module 4', score: 85, maxScore: 100, status: 'passed' },
        { name: 'Electrical - Module 1', score: 90, maxScore: 100, status: 'passed' },
        { name: 'Electrical - Module 2', score: 87, maxScore: 100, status: 'passed' },
    ],
    attendance: {
        total: 48,
        attended: 45,
        percentage: 94
    },
    achievements: [
        {
            id: 1,
            name: 'Fast Learner',
            description: 'Completed 5 modules with 90%+ scores',
            icon: '⚡',
            earnedDate: '2024-11-15',
            rarity: 'rare'
        },
        {
            id: 2,
            name: 'Perfect Attendance',
            description: 'Attended all classes for 2 months',
            icon: '📅',
            earnedDate: '2024-10-30',
            rarity: 'common'
        },
        {
            id: 3,
            name: 'Master Craftsman',
            description: 'Achieved excellence in practical assessments',
            icon: '🏆',
            earnedDate: '2024-12-01',
            rarity: 'epic'
        }
    ]
};

export const mockNotifications = [
    {
        id: 1,
        type: 'class',
        title: 'Class starts in 1 hour',
        message: 'Carpentry Basics - Room 204',
        time: '8:00 AM',
        read: false
    },
    {
        id: 2,
        type: 'payment',
        title: 'Payment due soon',
        message: 'Semester fees due in 5 days',
        time: 'Yesterday',
        read: false
    },
    {
        id: 3,
        type: 'announcement',
        title: 'New workshop available',
        message: 'Advanced Carpentry workshop registration open',
        time: '2 days ago',
        read: true
    },
    {
        id: 4,
        type: 'assignment',
        title: 'Assignment submitted',
        message: 'Your project photos have been received',
        time: '3 days ago',
        read: true
    }
];

export const mockCalendarEvents = [
    {
        id: 1,
        title: 'Carpentry Class',
        type: 'class',
        date: '2024-12-08',
        time: '9:00 AM',
        duration: '3 hours',
        location: 'Workshop A',
        instructor: 'Peter Kamau'
    },
    {
        id: 2,
        title: 'Electrical Practical',
        type: 'assessment',
        date: '2024-12-13',
        time: '10:00 AM',
        duration: '2 hours',
        location: 'Lab 2',
        instructor: 'James Odhiambo'
    },
    {
        id: 3,
        title: 'Fee Payment Deadline',
        type: 'payment',
        date: '2024-12-20',
        time: 'All day',
        duration: null,
        location: 'Finance Office'
    },
    {
        id: 4,
        title: 'End of Semester Exam',
        type: 'exam',
        date: '2024-12-22',
        time: '8:00 AM',
        duration: '4 hours',
        location: 'Main Hall'
    }
];
