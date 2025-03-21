import React from 'react';
import PropTypes from 'prop-types';
import './SkillCard.css'; // Assuming you have a separate CSS file for styling

const SkillCard = ({ skill }) => {
    return (
        <div className="skill-card">
            <div className="skill-card-image">
                <img src={skill.image} alt={skill.name} />
            </div>
            <div className="skill-card-content">
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
                <button className="btn btn-primary">Trade Skill</button>
            </div>
        </div>
    );
};

SkillCard.propTypes = {
    skill: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default SkillCard;