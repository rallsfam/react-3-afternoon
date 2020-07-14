updatePost() {
    const { text } = this.state;
    const { id, updatePostFn, hideEdit } = this.props;

    updatePostFn( id, text );
    hideEdit();
}