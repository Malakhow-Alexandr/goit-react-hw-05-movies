import PropTypes from 'prop-types';

import {
  ActorPhoto,
  ActorItem,
  ActorName,
  ActorRole,
} from './ActorListItem.styled';

const ActorListItem = ({ actorList }) => {
  return (
    <>
      {actorList.map(({ id, character, name, photo }) => (
        <ActorItem key={id}>
          <ActorPhoto src={photo} alt={name} width="176px" height="264px" />
          <ActorName>{name}</ActorName>
          <ActorRole>
            <span>Character:</span> {character}
          </ActorRole>
        </ActorItem>
      ))}
    </>
  );
};

export default ActorListItem;

ActorListItem.propTypes = {
  actorList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
