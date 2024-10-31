import PropTypes from 'prop-types';

export default function Note({ author, date, content }) {
    return (
        <div className="w-full h-fit p-4 rounded-lg bg-orange-50">
            <div className="mb-2 text-gray-500 text-xs">
                <span className="font-semibold">{author}</span> • <span>{date}</span>
            </div>
            <p className="text-gray-800">{content}</p>
        </div>
    );
}

Note.propTypes = {
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
