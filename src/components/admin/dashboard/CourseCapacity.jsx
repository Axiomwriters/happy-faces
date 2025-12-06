import { FaChalkboardTeacher, FaUsers } from 'react-icons/fa';

const CourseCapacity = () => {
    const courses = [
        { name: 'React Development', instructor: 'Tech Master', enrolled: 45, capacity: 50, color: 'bg-blue-500' },
        { name: 'Tailoring Workshop', instructor: 'M. Wanjiku', enrolled: 28, capacity: 30, color: 'bg-pink-500' },
        { name: 'Entrepreneurship', instructor: 'Dr. A. Ali', enrolled: 15, capacity: 40, color: 'bg-orange-500' },
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaChalkboardTeacher className="text-blue-500" /> Course Oversight
            </h3>

            <div className="space-y-4">
                {courses.map((course) => {
                    const percentage = Math.round((course.enrolled / course.capacity) * 100);
                    return (
                        <div key={course.name}>
                            <div className="flex justify-between items-end mb-1">
                                <div>
                                    <p className="text-sm font-medium text-gray-800">{course.name}</p>
                                    <p className="text-xs text-gray-500">{course.instructor}</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-bold text-gray-700">{percentage}% Full</span>
                                    <p className="text-[10px] text-gray-400">{course.enrolled}/{course.capacity} Students</p>
                                </div>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className={`h-2 rounded-full ${course.color}`} style={{ width: `${percentage}%` }}></div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center text-xs text-gray-500">
                <span>Total Instructors: 12</span>
                <span className="flex items-center gap-1"><FaUsers /> Avg. Class: 29</span>
            </div>
        </div>
    );
};

export default CourseCapacity;
