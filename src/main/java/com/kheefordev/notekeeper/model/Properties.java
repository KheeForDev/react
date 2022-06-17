package com.kheefordev.notekeeper.model;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Properties {
	@Value("${note.limit}")
	private int noteLimit;

	@Value("${note.limit.exceed.error}")
	private String noteLimitExceedError;

	@Value("${note.title.length}")
	private int noteTitleLength;

	@Value("${note.title.exceed.error}")
	private String noteTitleExceedError;

	@Value("${note.content.length}")
	private int noteContentLength;

	@Value("${note.content.empty.error}")
	private String noteContentEmptyError;

	@Value("${note.content.exceed.error}")
	private String noteContentExceedError;

	@Value("${note.add.msg}")
	private String noteAddMsg;

	@Value("${note.delete.msg}")
	private String noteDeleteMsg;

	@Value("${note.update.msg}")
	private String noteUpdateMsg;

	@Value("${note.delete.forbidden.error}")
	private String noteDeleteForbiddenError;

	@Value("${note.update.notfound.error}")
	private String noteUpdateNotfoundError;

	@Value("${note.update.forbidden.error}")
	private String noteUpdateForbiddenError;

	public int getNoteLimit() {
		return noteLimit;
	}

	public void setNoteLimit(int noteLimit) {
		this.noteLimit = noteLimit;
	}

	public String getNoteLimitExceedError() {
		return noteLimitExceedError;
	}

	public void setNoteLimitExceedError(String noteLimitExceedError) {
		this.noteLimitExceedError = noteLimitExceedError;
	}

	public int getNoteTitleLength() {
		return noteTitleLength;
	}

	public void setNoteTitleLength(int noteTitleLength) {
		this.noteTitleLength = noteTitleLength;
	}

	public String getNoteTitleExceedError() {
		return noteTitleExceedError;
	}

	public void setNoteTitleExceedError(String noteTitleExceedError) {
		this.noteTitleExceedError = noteTitleExceedError;
	}

	public int getNoteContentLength() {
		return noteContentLength;
	}

	public void setNoteContentLength(int noteContentLength) {
		this.noteContentLength = noteContentLength;
	}

	public String getNoteContentEmptyError() {
		return noteContentEmptyError;
	}

	public void setNoteContentEmptyError(String noteContentEmptyError) {
		this.noteContentEmptyError = noteContentEmptyError;
	}

	public String getNoteContentExceedError() {
		return noteContentExceedError;
	}

	public void setNoteContentExceedError(String noteContentExceedError) {
		this.noteContentExceedError = noteContentExceedError;
	}

	public String getNoteAddMsg() {
		return noteAddMsg;
	}

	public void setNoteAddMsg(String noteAddMsg) {
		this.noteAddMsg = noteAddMsg;
	}

	public String getNoteDeleteMsg() {
		return noteDeleteMsg;
	}

	public void setNoteDeleteMsg(String noteDeleteMsg) {
		this.noteDeleteMsg = noteDeleteMsg;
	}

	public String getNoteUpdateMsg() {
		return noteUpdateMsg;
	}

	public void setNoteUpdateMsg(String noteUpdateMsg) {
		this.noteUpdateMsg = noteUpdateMsg;
	}

	public String getNoteDeleteForbiddenError() {
		return noteDeleteForbiddenError;
	}

	public void setNoteDeleteForbiddenError(String noteDeleteForbiddenError) {
		this.noteDeleteForbiddenError = noteDeleteForbiddenError;
	}

	public String getNoteUpdateNotfoundError() {
		return noteUpdateNotfoundError;
	}

	public void setNoteUpdateNotfoundError(String noteUpdateNotfoundError) {
		this.noteUpdateNotfoundError = noteUpdateNotfoundError;
	}

	public String getNoteUpdateForbiddenError() {
		return noteUpdateForbiddenError;
	}

	public void setNoteUpdateForbiddenError(String noteUpdateForbiddenError) {
		this.noteUpdateForbiddenError = noteUpdateForbiddenError;
	}
}