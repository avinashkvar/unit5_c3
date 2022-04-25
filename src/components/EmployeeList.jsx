import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const EmployeeList = () => {
	const [user, setUser] = useState([]);
 
  const navigate = useNavigate()
	useEffect(() => {
		users();
	}, []);
	async function users() {
		let res = await fetch('http://localhost:8080/employee');
		let data = await res.json();
		setUser(data);
	}
  
   

	return (
		<div className="list_container">
			{/* On clicking this card anywhere, user goes to user details */}
			{user.map((e,i) => {
				return (
					<Link
						className="employee_card"
						to={`/employees/${e.employee_id}`}
					>
						<img
							className="employee_image"
							src={e.image}
							height="200px"
							width="200px"
						/>
						<span className="employee_name">{e.employee_name} / </span>
						<span className="employee_title">{e.title}</span>
					</Link>
				);
			})}
		</div>
	);
};
